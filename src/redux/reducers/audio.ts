import {
    ANNOUNCE_BEAT,
    CLEAR_EVENT_QUEUE,
    LISTEN_CELL_NOTE,
    RESET_TRANSPORT,
    TOGGLE_PLAY,
    Action,
    IListenCellNoteAction
} from "../actions/audio/interfaces"
import {
    ADD_TRACK,
    CHANGE_CELL_NOTE,
    CHANGE_MASTER_GAIN,
    CHANGE_TRACK_GAIN,
    SCHEDULE_TRACK_CELL,
    TOGGLE_TRACK_CELL,
    IAddTrackAction,
    IChangeCellNoteAction,
    IChangeMasterGainAction,
    IChangeTrackGainAction,
    IScheduleTrackCellAction,
    IToggleTrackCellAction
} from "../actions/session/interfaces"
import { IAudioState } from "../store/audio/interfaces"

type ReducerAction =
    | Action
    | IChangeMasterGainAction
    | IChangeTrackGainAction
    | IScheduleTrackCellAction
    | IToggleTrackCellAction
    | IListenCellNoteAction
    | IChangeCellNoteAction
    | IAddTrackAction

const initialState: IAudioState = {
    ready: false,
    playing: false,
    mode: "PLAY",
    currentBeat: 0,
    events: []
}

const reducer = (
    state: IAudioState = initialState,
    action: ReducerAction
): IAudioState => {
    switch (action.type) {
        case RESET_TRANSPORT:
            return {
                ...state,
                playing: false
            }

        case TOGGLE_PLAY:
            return {
                ...state,
                playing: !state.playing,
                events: [...state.events, action]
            }

        case ANNOUNCE_BEAT:
            return {
                ...state,
                currentBeat: action.payload.beat
            }

        case CLEAR_EVENT_QUEUE:
            return {
                ...state,
                events: []
            }

        case CHANGE_MASTER_GAIN:
        case CHANGE_TRACK_GAIN:
        case SCHEDULE_TRACK_CELL:
        case TOGGLE_TRACK_CELL:
        case CHANGE_CELL_NOTE:
        case LISTEN_CELL_NOTE:
        case ADD_TRACK:
            return {
                ...state,
                events: [...state.events, action]
            }

        default:
            return state
    }
}

export default reducer
