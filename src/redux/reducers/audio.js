// @flow strict
import {
  ANNOUNCE_BEAT,
  CLEAR_EVENT_QUEUE,
  LISTEN_CELL_NOTE,
  RESET_TRANSPORT,
  TOGGLE_PLAY
} from "../actions/audio/types"
import {
  ADD_TRACK,
  CHANGE_CELL_NOTE,
  CHANGE_MASTER_GAIN,
  CHANGE_TRACK_GAIN,
  SCHEDULE_TRACK_CELL,
  TOGGLE_TRACK_CELL
} from "../actions/session/types"

import type { Action, ListenCellNoteAction } from "../actions/audio/types"
import type { AudioState } from "../store/audio/types"
import type {
  AddTrackAction,
  ChangeCellNoteAction,
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction,
  ToggleTrackCellAction
} from "../actions/session/types"

type ReducerAction =
  | Action
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction
  | ToggleTrackCellAction
  | ListenCellNoteAction
  | ChangeCellNoteAction
  | AddTrackAction

const initialState: AudioState = {
  ready: false,
  playing: false,
  mode: "PLAY",
  currentBeat: 0,
  events: []
}

const reducer = (
  state: AudioState = initialState,
  action: ReducerAction
): AudioState => {
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
