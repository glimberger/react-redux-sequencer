// @flow strict
import {
  ANNOUNCE_BEAT,
  CLEAR_EVENT_QUEUE,
  RESET_TRANSPORT,
  TOGGLE_PLAY
} from "../actions/audio/types"
import initialState from "../store/audio/initialState"
import {
  CHANGE_MASTER_GAIN,
  CHANGE_TRACK_GAIN,
  SCHEDULE_TRACK_CELL
} from "../actions/session/types"

import type { Action } from "../actions/audio/types"
import type { AudioState } from "../store/audio/types"
import type {
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction
} from "../actions/session/types"

type ReducerAction =
  | Action
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction

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
      return {
        ...state,
        events: [...state.events, action]
      }

    case CHANGE_TRACK_GAIN:
      return {
        ...state,
        events: [...state.events, action]
      }

    case SCHEDULE_TRACK_CELL:
      return {
        ...state,
        events: [...state.events, action]
      }

    default:
      return state
  }
}

export default reducer
