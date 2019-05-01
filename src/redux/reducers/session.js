// @flow strict

import type { Action } from "../actions/session/types"
import type { Session, Track, Cell } from "../store/session/types"

import {
  CHANGE_MASTER_GAIN,
  CHANGE_NOTE_RESOLUTION,
  CHANGE_TEMPO,
  CHANGE_TRACK_GAIN,
  SCHEDULE_TRACK_CELL,
  SET_ACTIVE_CELL,
  TOGGLE_ACTIVE_TRACK,
  TOGGLE_TRACK_MUTE,
  TOGGLE_TRACK_SOLO
} from "../actions/session/types"
import initialSate from "../store/session/initialState"

const trackReducer = (state: Track, action) => {
  switch (action.type) {
    case CHANGE_TRACK_GAIN:
      return {
        ...state,
        processing: {
          ...state.processing,
          gain: { gain: action.payload.gain }
        }
      }

    case CHANGE_NOTE_RESOLUTION:
      return {
        ...state,
        noteResolution: action.payload.noteResolution
      }

    case TOGGLE_TRACK_SOLO:
      return {
        ...state,
        soloed: !state.soloed
      }

    case TOGGLE_TRACK_MUTE:
      return {
        ...state,
        muted: !state.muted
      }

    default:
      return state
  }
}

const tracksReducer = (state: { [trackID: string]: Track }, action: Action) => {
  switch (action.type) {
    case CHANGE_TRACK_GAIN:
    case CHANGE_NOTE_RESOLUTION:
    case TOGGLE_TRACK_SOLO:
    case TOGGLE_TRACK_MUTE:
      return {
        ...state,
        [action.payload.trackID]: trackReducer(
          state[action.payload.trackID],
          action
        )
      }

    default:
      return state
  }
}

const sessionReducer = (state: Session = initialSate, action: Action) => {
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
    case CHANGE_NOTE_RESOLUTION:
    case TOGGLE_TRACK_SOLO:
    case TOGGLE_TRACK_MUTE:
      return {
        ...state,
        tracks: tracksReducer(state.tracks, action)
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

    case TOGGLE_ACTIVE_TRACK:
      return {
        ...state,
        activeTrackID:
          state.activeTrackID === action.payload.trackID
            ? null
            : action.payload.trackID
      }

    case SET_ACTIVE_CELL:
      return {
        ...state,
        activeCellBeat: action.payload.beat
      }

    default:
      return state
  }
}

export default sessionReducer

export function getOrderedTracks(state: Session): Array<Track> {
  console.debug("[reducers/session.js] getOrderedTracks(", state, ")")
  return state.trackOrder.map(trackID => {
    return state.tracks[trackID]
  })
}

export function getTrack(state: Session, trackID: string): Track {
  console.debug("[reducers/session.js] getTrack(", state, ",", trackID, ")")
  return state.tracks[trackID]
}

export function getActiveTrack(state: Session): ?Track {
  console.debug("[reducers/session.js] getActiveTrack(", state, ")")
  return state.activeTrackID ? state.tracks[state.activeTrackID] : null
}

export function getCellRow(state: Session, trackID: string): Array<Cell> {
  console.debug("[reducers/session.js] getCellRow(", state, ",", trackID, ")")
  return state.matrix[trackID]
}

export function getCell(state: Session, trackID: string, beat: number): Cell {
  console.debug("[reducers/session.js] getCell(", state, ",", trackID, ")")
  return getCellRow(state, trackID)[beat]
}

export function getActiveCell(state: Session): ?Cell {
  console.debug("[reducers/session.js] getActiveCell(", state, ")")
  return state.activeTrackID && state.activeCellBeat
    ? getCellRow(state, state.activeTrackID)[state.activeCellBeat]
    : null
}

export function getSolos(state: Session): { [trackID: string]: boolean } {
  console.debug("[reducers/session.js] getSolos(", state, ")")
  const solos = {}
  state.trackOrder.forEach(trackID => {
    solos[trackID] = state.tracks[trackID].soloed
  })

  return solos
}

export function isSoloActive(state: Session): boolean {
  const solos = getSolos(state)

  return Object.keys(solos).reduce((acc, trackID) => {
    return solos[trackID] || acc
  }, false)
}

export function getMutes(state: Session): { [trackID: string]: boolean } {
  console.debug("[reducers/session.js] getMutes(", state, ")")
  const mutes = {}
  state.trackOrder.forEach(trackID => {
    mutes[trackID] = state.tracks[trackID].muted
  })

  return mutes
}
