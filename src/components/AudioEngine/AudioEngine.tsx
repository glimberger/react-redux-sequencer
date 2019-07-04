import * as React from "react"
import { connect } from "react-redux"

import AudioProcessor from "../../audio/processor/processor"
import { IN_DEV } from "../../utils/env"
import {
    IClearEventQueueAction,
    IListenCellNoteAction,
    IResetTransportAction,
    ITogglePlayAction
} from "../../redux/actions/audio/interfaces"
import { IAudioState } from "../../redux/store/audio/interfaces"
import {
    IAddTrackAction,
    IChangeCellNoteAction,
    IChangeMasterGainAction,
    IChangeTrackGainAction,
    IScheduleTrackCellAction,
    IToggleTrackCellAction
} from "../../redux/actions/session/interfaces"
import { ISession } from "../../redux/store/session/interfaces"
import { IAppState } from "../../redux/store/configureStore"
import { getMutes, getSolos, isSoloActive } from "../../redux/reducers"
import {
    announceBeat,
    clearEventQueue,
    resetTransport,
    setAudioEngineReady,
    togglePlay
} from "../../redux/actions/audio/creators"
import {
    changeMasterGain,
    changeTrackGain
} from "../../redux/actions/session/creators"

type AudioEvent =
    | ITogglePlayAction
    | IResetTransportAction
    | IChangeMasterGainAction
    | IChangeTrackGainAction
    | IScheduleTrackCellAction
    | IToggleTrackCellAction
    | IClearEventQueueAction
    | IListenCellNoteAction
    | IChangeCellNoteAction
    | IAddTrackAction

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {}

export interface IAudioProps extends IOwnProps, IAudioState, ISession {
    solos: { [trackID: string]: boolean }
    mutes: { [trackID: string]: boolean }
    isSoloActive: boolean
    announceBeat: (beatNumber: number) => void
    clearEventQueue: () => void
    resetTransport: () => void
    togglePlay: () => void
    setAudioEngineReady: () => void
}

interface IState {
    timer?: IntervalID
    current16thNote: number
    nextNoteTime: number
}

export const fetchBuffer = async (url: string): Promise<ArrayBuffer> => {
    const resp = await fetch(url)
    return resp.arrayBuffer()
}

type IntervalID = number | undefined

// tslint:disable:no-console no-unused-expression

export class AudioEngine extends React.Component<IAudioProps, IState> {
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

    state = {
        timer: undefined,
        current16thNote: 0, // What note is currently last scheduled?
        nextNoteTime: 0.0 // when the next note is due.
    }

    constructor(props: IAudioProps) {
        super(props)

        this.timerInterval = 25
        this.scheduleAheadTime = 0.1
        this.noteResolution = 0
        this.noteLength = 0.05

        this.processor = new AudioProcessor()
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

    shouldComponentUpdate(nextProps: IAudioProps): boolean {
        return nextProps.events.length > 0
    }

    componentWillUpdate(props: IAudioProps) {
        IN_DEV && console.debug("[AudioEngine] componentWillUpdate")
        props.events.forEach(this.processEvent)
        props.clearEventQueue()
    }

    stopTimer = () => {
        this.state.timer && clearInterval(this.state.timer)
        this.setState({
            timer: undefined
        })
    }

    startTimer = () =>
        window.setInterval(() => {
            this.scheduler()
        }, this.timerInterval)

    processEvent = (event: AudioEvent) => {
        const { tracks, instruments, matrix, playing } = this.props

        switch (event.type) {
            case "TOGGLE_PLAY":
                if (playing) {
                    this.stopTimer()
                } else {
                    const timer = this.startTimer()
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
            case "TOGGLE_TRACK_CELL":
                if (playing) {
                    break
                }

                console.log("play")
                this.processor.playSample(
                    event.payload.beat,
                    matrix[event.payload.trackID][event.payload.beat].processing
                        .gain.gain,
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
                    matrix[event.payload.trackID][event.payload.beat].processing
                        .gain.gain,
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
            this.scheduleNote(
                this.state.current16thNote,
                this.state.nextNoteTime
            )
            this.nextNote()
        }
    }

    scheduleNote(beatNumber: number, time: number) {
        if (this.noteResolution === 1 && beatNumber % 2) {
            return
        } // we're not playing non-8th 16th notes
        if (this.noteResolution === 2 && beatNumber % 4) {
            return
        } // we're not playing non-quarter 8th notes

        Object.keys(this.props.tracks).forEach(trackID => {
            this.processor.scheduleNoteForTrack(
                beatNumber,
                time,
                trackID,
                this.props.tracks,
                this.props.instruments,
                this.props.matrix,
                this.props.isSoloActive,
                this.props.solos,
                this.props.mutes,
                this.props.tempo
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
                current16thNote:
                    current16thNote === 63 ? 0 : current16thNote + 1
            }
        })
    }
}

const mapStateToProps = (state: IAppState) => ({
    ...state.session,
    ...state.audio,
    mutes: getMutes(state),
    solos: getSolos(state),
    isSoloActive: isSoloActive(state)
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
        changeTrackGain
    }
)(AudioEngine)

export default AudioEngineConnected
