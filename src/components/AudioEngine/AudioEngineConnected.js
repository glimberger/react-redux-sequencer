// @flow strict
import * as React from "react"
import { connect } from "react-redux"

import {
  announceBeat,
  clearEventQueue,
  togglePlay,
  setAudioEngineReady,
  resetTransport
} from "../../redux/actions/audio/creators"

import createContext from "../../audio/context/createContext"
import type {
  ClearEventQueueAction,
  ResetTransportAction,
  TogglePlayAction
} from "../../redux/actions/audio/types"
import type { AudioState } from "../../redux/store/audio/types"
import {
  changeMasterGain,
  changeTempo,
  changeTrackGain
} from "../../redux/actions/session/creators"
import type {
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction
} from "../../redux/actions/session/types"
import type { Session } from "../../redux/store/session/types"
import type { Sample } from "../../redux/store/sample/types"

type AudioEvent =
  | TogglePlayAction
  | ResetTransportAction
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction
  | ClearEventQueueAction

type State = {
  +timer: ?IntervalID,
  +current16thNote: number,
  +nextNoteTime: number
}

type StateProps = AudioState & Session

type DispatchProps = {
  announceBeat: (beatNumber: number) => void,
  clearEventQueue: () => void,
  resetTransport: () => void,
  togglePlay: () => void,
  setAudioEngineReady: () => void
}

class AudioEngine extends React.Component<StateProps & DispatchProps, State> {
  audioBuffers: Map<string, AudioBuffer>
  audioNodes: Map<string, { gain: AudioNode }>
  masterGainNode: GainNode

  audioContext: AudioContext

  /**
   * Timer interval (ms)
   */
  timerInterval: number
  /**
   * How far ahead to schedule audio (sec)
   */
  scheduleAheadTime: number
  /**
   * 0 == 16th,
   * 1 == 8th,
   * 2 == quarter note
   */
  noteResolution: number
  /**
   * length of "beep" (in seconds)
   */
  noteLength: number

  constructor(props) {
    super(props)

    this.timerInterval = 25
    this.scheduleAheadTime = 0.1
    this.noteResolution = 0
    this.noteLength = 0.05

    this.audioBuffers = new Map()
    this.audioNodes = new Map()

    this.audioContext = createContext()
    this.masterGainNode = this.audioContext.createGain()
  }

  state = {
    timer: null,
    current16thNote: 0, // What note is currently last scheduled?
    nextNoteTime: 0.0 // when the next note is due.
  }

  setUp = (ctx: AudioContext) => {
    const { tracks, samples, masterGain } = this.props

    // set master gain node and connect it to output
    this.masterGainNode.connect(ctx.destination)
    this.masterGainNode.gain.setValueAtTime(masterGain, ctx.currentTime)

    this.audioBuffers = new Map<string, AudioBuffer>()
    this.audioNodes = new Map<string, { gain: AudioNode }>()

    // load session samples
    this.loadSamples(ctx, samples)
    // Object.keys(samples).forEach(async sampleID => {
    //   const { url } = samples[sampleID]
    //   const audioBuffer = await this.loadSound(url, ctx)
    //
    //   if (audioBuffer) {
    //     this.audioBuffers.set(sampleID, audioBuffer)
    //   }
    // })

    Object.keys(tracks).forEach(trackID => {
      const { processing } = tracks[trackID]

      // set the track gain node and connect it to the master gain node
      const gainNode = this.audioContext.createGain()
      gainNode.connect(this.masterGainNode)
      gainNode.gain.setValueAtTime(processing.gain.gain, ctx.currentTime)

      let nodes = this.audioNodes.get(trackID) || {}
      nodes.gain = gainNode
      this.audioNodes.set(trackID, nodes)
    })
  }

  loadSamples = async (
    ctx: AudioContext,
    samples: {
      [sampleID: string]: Sample
    }
  ) => {
    const sampleIDs = Object.keys(samples).map(sampleID => sampleID)
    const audioBuffers = await Promise.all(
      Object.keys(samples).map(sampleID => {
        const { url } = samples[sampleID]
        return this.loadSound(url, ctx)
      })
    )

    audioBuffers.forEach((audioBuffer, idx) => {
      if (audioBuffer) {
        this.audioBuffers.set(sampleIDs[idx], audioBuffer)
      }
    })
  }

  componentDidMount(): void {
    console.log("AudioEngine", "componentDidMount")
    this.setUp(this.audioContext)
    this.props.setAudioEngineReady()
  }

  loadSound = async (url: string, ctx: AudioContext): Promise<?AudioBuffer> => {
    const resp = await fetch(url)
    const arrayBuffer = await resp.arrayBuffer()

    return ctx.decodeAudioData(arrayBuffer)
  }

  render() {
    return null
  }

  componentWillUnmount() {
    console.log("AudioEngine", "componentWillUnmount")
    this.audioContext.close()
    this.props.resetTransport()
    if (this.state.timer) {
      this.stopTimer()
    }
  }

  shouldComponentUpdate(nextProps: StateProps & DispatchProps): boolean {
    return nextProps.events.length > 0
  }

  componentWillUpdate(props) {
    console.log("AudioEngine", "componentWillUpdate")
    props.events.forEach(this.processEvent)
    props.clearEventQueue()
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    this.setState({
      timer: null
    })
  }

  processEvent = (event: AudioEvent) => {
    const { tracks, instruments, matrix, playing } = this.props

    switch (event.type) {
      case "TOGGLE_PLAY":
        if (!playing) {
          let timer = setInterval(() => {
            this.scheduler()
          }, this.timerInterval)
          this.setState({
            timer,
            current16thNote: 0,
            nextNoteTime: this.audioContext.currentTime
          })
        } else {
          this.stopTimer()
        }
        break

      case "CHANGE_MASTER_GAIN":
        console.assert(
          this.masterGainNode instanceof GainNode,
          "this.masterGainNode should be instance of GainNode"
        )

        if (this.masterGainNode instanceof GainNode) {
          this.masterGainNode.gain.setValueAtTime(
            this.props.masterGain,
            this.audioContext.currentTime
          )
        }
        break

      case "CHANGE_TRACK_GAIN":
        const nodes = this.audioNodes.get(event.payload.trackID)

        if (nodes) {
          if (nodes.gain instanceof GainNode) {
            nodes.gain.gain.setValueAtTime(
              event.payload.gain,
              this.audioContext.currentTime
            )
          }
        }
        break

      case "SCHEDULE_TRACK_CELL":
        if (playing) {
          break
        }

        // play sound
        const { instrumentID } = tracks[event.payload.trackID]
        const { mapping } = instruments[instrumentID]
        const { midi } = matrix[event.payload.trackID][event.payload.beat]
        const { sampleID, detune } = mapping[midi]

        const source = this.audioContext.createBufferSource()
        const audioBuffer = this.audioBuffers.get(sampleID)

        console.assert(
          audioBuffer instanceof AudioBuffer,
          "'audioBuffer' should an instance of AudioBuffer,",
          audioBuffer,
          "given."
        )

        if (audioBuffer instanceof AudioBuffer) {
          source.buffer = audioBuffer
          source.detune.value = detune
          source.connect(this.masterGainNode)
          source.start(this.audioContext.currentTime)
        }
        break

      default:
        break
    }
  }

  scheduler() {
    while (
      this.state.nextNoteTime <
      this.audioContext.currentTime + this.scheduleAheadTime
    ) {
      this.scheduleNote(this.state.current16thNote, this.state.nextNoteTime)
      this.nextNote()
    }
  }

  scheduleNote(beatNumber: number, time: number) {
    const {
      tracks,
      instruments,
      matrix,
      announceBeat,
      mutes,
      solos
    } = this.props

    announceBeat(beatNumber)

    if (this.noteResolution === 1 && beatNumber % 2) return // we're not playing non-8th 16th notes
    if (this.noteResolution === 2 && beatNumber % 4) return // we're not playing non-quarter 8th notes

    console.assert(
      this.masterGainNode instanceof GainNode,
      "'this.masterGainNode' should be a GainNode instance,",
      this.masterGainNode,
      "given."
    )
    if (!this.masterGainNode) {
      return
    }

    const isSoloActive: boolean = Object.keys(solos).reduce((acc, trackID) => {
      return solos[trackID].enabled || acc
    }, false)

    Object.keys(tracks).forEach(trackID => {
      const { instrumentID, noteResolution } = tracks[trackID]

      // note resolution
      if (beatNumber % noteResolution) return

      // solo
      if (
        isSoloActive &&
        (!solos[trackID] || solos[trackID].enabled === false)
      ) {
        return
      }

      // mute
      if (mutes[trackID] && mutes[trackID].enabled === true) {
        return
      }

      const { mapping } = instruments[instrumentID]
      const { scheduled, midi } = matrix[trackID][beatNumber]

      // scheduled ?
      if (scheduled === false) {
        return
      }

      const { detune, sampleID } = mapping[midi]
      const audioBuffer = this.audioBuffers.get(sampleID)

      console.assert(
        audioBuffer instanceof AudioBuffer,
        "'audioBuffer' should an instance of AudioBuffer,",
        audioBuffer,
        "given."
      )
      if (!audioBuffer instanceof AudioBuffer) {
        return
      }

      const audioNodes = this.audioNodes.get(trackID)
      if (!audioNodes) {
        return
      }

      const source = this.audioContext.createBufferSource()
      source.detune.value = detune

      const gainNode = audioNodes.gain
      console.assert(
        gainNode instanceof GainNode,
        "'gainNode' should be an instance of GainNode,",
        gainNode,
        "given."
      )
      if (audioBuffer instanceof AudioBuffer && gainNode instanceof GainNode) {
        source.buffer = audioBuffer
        source.connect(gainNode)
      }

      source.start(time)
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

const mapStateToProps = (state: { audio: AudioState, session: Session }) => ({
  ...state.session,
  ...state.audio
})

const AudioEngineConnected = connect(
  mapStateToProps,
  {
    announceBeat,
    clearEventQueue,
    resetTransport,
    togglePlay,
    setAudioEngineReady,
    changeMasterGain,
    changeTempo,
    changeTrackGain
  }
)(AudioEngine)

export default AudioEngineConnected
