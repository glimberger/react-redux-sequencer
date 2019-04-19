// @flow strict

import type { Action } from "../actions/session/types"
import type { Session, Track } from "../store/session/types"

import {
  CHANGE_MASTER_GAIN,
  CHANGE_NOTE_RESOLUTION,
  CHANGE_TEMPO,
  CHANGE_TRACK_GAIN,
  SCHEDULE_TRACK_CELL
} from "../actions/session/types"
import initialSate from "../store/session/initialState"

let track

const reducer = (state: Session = initialSate, action: Action) => {
  switch (action.type) {
    case CHANGE_TEMPO:
      return {
        ...state,
        tempo: action.payload.tempo
      }

    case CHANGE_MASTER_GAIN:
      return {
        ...state,
        masterGain: action.payload.gain
      }

    case CHANGE_TRACK_GAIN:
      track = { ...state.tracks[action.payload.trackID] }
      track.processing.gain.gain = action.payload.gain

      return {
        ...state,
        tracks: {
          ...state.tracks,
          [action.payload.trackID]: track
        }
      }

    case SCHEDULE_TRACK_CELL:
      const row = [
        ...state.matrix[action.payload.trackID].slice(0, action.payload.beat),
        {
          ...state.matrix[action.payload.trackID][action.payload.beat],
          scheduled: !state.matrix[action.payload.trackID][action.payload.beat]
            .scheduled
        },
        ...state.matrix[action.payload.trackID].slice(action.payload.beat + 1)
      ]

      return {
        ...state,
        matrix: {
          ...state.matrix,
          [action.payload.trackID]: row
        }
      }

    case CHANGE_NOTE_RESOLUTION:
      track = { ...state.tracks[action.payload.trackID] }
      track.noteResolution = action.payload.noteResolution

      return {
        ...state,
        tracks: {
          ...state.tracks,
          [action.payload.trackID]: track
        }
      }

    default:
      return state
  }
}

export default reducer

export function getOrderedTracks(state: Session): Array<Track> {
  return state.trackOrder.map(trackID => {
    return state.tracks[trackID]
  })
}

export function getOrderedMatrix(
  state: Session
): Array<Array<{| scheduled: boolean, midi: number |}>> {
  return state.trackOrder.map(trackID => {
    return state.matrix[trackID]
  })
}
