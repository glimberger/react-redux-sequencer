// @flow strict
import * as React from "react"

import AudioProcessor from "../../audio/processor/processor"
import { IN_DEV } from "../../utils/env"

import type {
  ClearEventQueueAction,
  ListenCellNoteAction,
  ResetTransportAction,
  TogglePlayAction
} from "../../redux/actions/audio/types"
import type { AudioState } from "../../redux/store/audio/types"
import type {
  AddTrackAction,
  ChangeCellNoteAction,
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction
} from "../../redux/actions/session/types"
import type { Session } from "../../redux/store/session/types"

type AudioEvent =
  | TogglePlayAction
  | ResetTransportAction
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction
  | ClearEventQueueAction
  | ListenCellNoteAction
  | ChangeCellNoteAction
  | AddTrackAction

type StateProps = {
  ...AudioState,
  ...Session,
  solos: { [trackID: string]: boolean },
  mutes: { [trackID: string]: boolean },
  isSoloActive: boolean
}

type DispatchProps = {
  announceBeat: (beatNumber: number) => void,
  clearEventQueue: () => void,
  resetTransport: () => void,
  togglePlay: () => void,
  setAudioEngineReady: () => void
}

type Props = StateProps & DispatchProps

type State = {
  +timer: ?IntervalID,
  +current16thNote: number,
  +nextNoteTime: number
}

export const fetchBuffer = async (url: string): Promise<ArrayBuffer> => {
  const resp = await fetch(url)
  return resp.arrayBuffer()
}

class AudioEngine extends React.Component<Props, State> {
  /** Timer interval (ms) */
  timerInterval: number

  /** How far ahead to schedule audio (sec) */
  scheduleAheadTime: number

  /**
   * 0 == 16th,
   * 1 == 8th,
   * 2 == quarter note
   */
  noteResolution: number

  /** length of "beep" (in seconds) */
  noteLength: number

  processor: AudioProcessor

  constructor(props: Props) {
    super(props)

    this.timerInterval = 25
    this.scheduleAheadTime = 0.1
    this.noteResolution = 0
    this.noteLength = 0.05

    this.processor = new AudioProcessor()
  }

  state = {
    timer: null,
    current16thNote: 0, // What note is currently last scheduled?
    nextNoteTime: 0.0 // when the next note is due.
  }

  render() {
    return null
  }

  setUp = () => {
    this.processor.setMasterGainNodeValue(this.props.masterGain)

    this.processor
      .storeSampleAudioBuffers(this.props.samples, fetchBuffer)
      .catch(error => console.error(error))

    Object.keys(this.props.tracks).forEach(trackID => {
      const track = this.props.tracks[trackID]
      this.processor.setTrackGainNode(trackID, track.processing.gain.gain)
    })
  }

  componentDidMount(): void {
    IN_DEV && console.debug("[AudioEngine] componentDidMount")
    this.setUp()
    this.props.setAudioEngineReady()
  }

  componentWillUnmount() {
    IN_DEV && console.debug("[AudioEngine] componentWillUnmount")
    this.processor.close()
    this.props.resetTransport()
    if (this.state.timer) {
      this.stopTimer()
    }
  }

  shouldComponentUpdate(nextProps: StateProps & DispatchProps): boolean {
    return nextProps.events.length > 0
  }

  componentWillUpdate(props: Props) {
    IN_DEV && console.debug("[AudioEngine] componentWillUpdate")
    props.events.forEach(this.processEvent)
    props.clearEventQueue()
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({
      timer: null
    })
  }

  startTimer = () =>
    setInterval(() => {
      this.scheduler()
    }, this.timerInterval)

  processEvent = (event: AudioEvent) => {
    const { tracks, instruments, matrix, playing } = this.props

    switch (event.type) {
      case "TOGGLE_PLAY":
        if (playing) {
          this.stopTimer()
        } else {
          let timer = this.startTimer()
          this.setState({
            timer,
            current16thNote: 0,
            nextNoteTime: this.processor.ctx.currentTime
          })
        }
        break

      case "CHANGE_MASTER_GAIN":
        this.processor.setMasterGainNodeValue(this.props.masterGain)
        break

      case "CHANGE_TRACK_GAIN":
        this.processor.setTrackGainNodeValue(
          event.payload.trackID,
          event.payload.gain
        )
        break

      case "SCHEDULE_TRACK_CELL":
        if (playing) {
          break
        }

        this.processor.playSample(
          event.payload.beat,
          matrix[event.payload.trackID][event.payload.beat].processing.gain
            .gain,
          null,
          event.payload.trackID,
          tracks,
          instruments,
          matrix
        )
        break

      case "LISTEN_CELL_NOTE":
      case "CHANGE_CELL_NOTE":
        if (playing) {
          break
        }

        this.processor.playSample(
          event.payload.beat,
          matrix[event.payload.trackID][event.payload.beat].processing.gain
            .gain,
          event.payload.note,
          event.payload.trackID,
          tracks,
          instruments,
          matrix
        )
        break

      case "ADD_TRACK":
        this.processor
          .storeSampleAudioBuffers(event.payload.samples, fetchBuffer)
          .catch(error => console.error(error))

        this.processor.setTrackGainNode(event.payload.trackID, 1)
        break

      default:
        break
    }
  }

  scheduler() {
    while (
      this.state.nextNoteTime <
      this.processor.ctx.currentTime + this.scheduleAheadTime
    ) {
      this.props.announceBeat(this.state.current16thNote)
      this.scheduleNote(this.state.current16thNote, this.state.nextNoteTime)
      this.nextNote()
    }
  }

  scheduleNote(beatNumber: number, time: number) {
    const {
      tracks,
      instruments,
      matrix,
      mutes,
      solos,
      isSoloActive,
      tempo
    } = this.props

    if (this.noteResolution === 1 && beatNumber % 2) return // we're not playing non-8th 16th notes
    if (this.noteResolution === 2 && beatNumber % 4) return // we're not playing non-quarter 8th notes

    Object.keys(tracks).forEach(trackID => {
      this.processor.scheduleNoteForTrack(
        beatNumber,
        time,
        trackID,
        tracks,
        instruments,
        matrix,
        isSoloActive,
        solos,
        mutes,
        tempo
      )
    })
  }

  nextNote() {
    this.setState(prevState => {
      // Advance current note and time by a 16th note...
      const secondsPerBeat = 60.0 / this.props.tempo
      // Notice this picks up the CURRENT tempo value to calculate beat length.
      // Add beat length to last beat time

      const { current16thNote } = prevState

      return {
        nextNoteTime: this.state.nextNoteTime + 0.25 * secondsPerBeat,
        // Advance the beat number, wrap to zero
        current16thNote: current16thNote === 63 ? 0 : current16thNote + 1
      }
    })
  }
}

export default AudioEngine
