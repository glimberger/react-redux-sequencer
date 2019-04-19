// @flow strict
import {
  ANNOUNCE_BEAT,
  CLEAR_EVENT_QUEUE,
  RESET_TRANSPORT,
  TOGGLE_PLAY,
  TOGGLE_MUTE_TRACK,
  TOGGLE_SOLO_TRACK,
  TOGGLE_TRACK_PANEL,
  SET_PLAY_MODE,
  SET_EDIT_MODE,
  TOGGLE_CELL_PANEL
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

    case TOGGLE_MUTE_TRACK:
      return {
        ...state,
        mutes: {
          ...state.mutes,
          [action.payload.trackID]: {
            enabled: state.mutes[action.payload.trackID]
              ? !state.mutes[action.payload.trackID].enabled
              : true
          }
        }
      }

    case TOGGLE_SOLO_TRACK:
      return {
        ...state,
        solos: {
          ...state.solos,
          [action.payload.trackID]: {
            enabled: state.solos[action.payload.trackID]
              ? !state.solos[action.payload.trackID].enabled
              : true
          }
        }
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

    case TOGGLE_TRACK_PANEL:
      return {
        ...state,
        currentTrackPanel:
          state.currentTrackPanel === action.payload.trackID
            ? null
            : action.payload.trackID
      }

    case TOGGLE_CELL_PANEL:
      return {
        ...state,
        currentCellPanel:
          state.currentCellPanel &&
          state.currentCellPanel.trackID === action.payload.trackID &&
          state.currentCellPanel.beat === action.payload.beat
            ? null
            : action.payload
      }

    case SET_PLAY_MODE:
      return {
        ...state,
        mode: "PLAY",
        currentTrackPanel: null,
        currentCellPanel: null
      }

    case SET_EDIT_MODE:
      return {
        ...state,
        mode: "EDIT"
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
