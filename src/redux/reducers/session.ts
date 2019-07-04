import { trackColors, MaterialColor } from "../../utils/color/colorLibrary"

import { ISession, ITrack, ICell } from "../store/session/interfaces"

import {
  Action,
  ADD_TRACK,
  CHANGE_CELL_GAIN,
  CHANGE_CELL_NOTE,
  CHANGE_MASTER_GAIN,
  CHANGE_NOTE_RESOLUTION,
  CHANGE_TEMPO,
  CHANGE_TRACK_GAIN,
  CHANGE_TRACK_LABEL,
  SCHEDULE_TRACK_CELL,
  SET_ACTIVE_CELL,
  TOGGLE_ACTIVE_TRACK,
  TOGGLE_TRACK_CELL,
  TOGGLE_TRACK_MUTE,
  TOGGLE_TRACK_SOLO
} from "../actions/session/interfaces"

import { IInstruments } from "../store/instrument/interfaces"
import { ISamples } from "../store/sample/interfaces"

const initialState: ISession = {
  tempo: 120,
  masterGain: 1,
  activeTrackID: null,
  activeCellBeat: null,
  trackOrder: [],
  matrix: {},
  tracks: {},
  instruments: {},
  samples: {}
}

const instrumentsReducer = (state: IInstruments, action: Action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        [action.payload.instrument.id]: action.payload.instrument
      }

    default:
      return state
  }
}

const samplesReducer = (state: ISamples, action: Action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        ...action.payload.samples
      }

    default:
      return state
  }
}

const cellReducer = (state: ICell, action: Action) => {
  switch (action.type) {
    case CHANGE_CELL_NOTE:
      return {
        ...state,
        midi: action.payload.note,
        scheduled: true
      }

    case SCHEDULE_TRACK_CELL:
    case TOGGLE_TRACK_CELL:
      return {
        ...state,
        scheduled: !state.scheduled
      }

    case CHANGE_CELL_GAIN:
      return {
        ...state,
        processing: {
          ...state.processing,
          gain: { gain: action.payload.gain }
        }
      }

    default:
      return state
  }
}

const cellRowReducer = (state: ICell[], action: Action) => {
  switch (action.type) {
    case CHANGE_CELL_NOTE:
    case SCHEDULE_TRACK_CELL:
    case TOGGLE_TRACK_CELL:
    case CHANGE_CELL_GAIN:
      return [
        ...state.slice(0, action.payload.beat),
        cellReducer(state[action.payload.beat], action),
        ...state.slice(action.payload.beat + 1)
      ]

    case ADD_TRACK:
      return new Array(64).fill(0).map(() => ({
        scheduled: false,
        midi: 69,
        processing: { gain: { gain: 1 } }
      }))

    default:
      return state
  }
}

const matrixReducer = (
  state: { [trackID: string]: ICell[] },
  action: Action
) => {
  switch (action.type) {
    case CHANGE_CELL_NOTE:
    case SCHEDULE_TRACK_CELL:
    case TOGGLE_TRACK_CELL:
    case CHANGE_CELL_GAIN:
    case ADD_TRACK:
      return {
        ...state,
        [action.payload.trackID]: cellRowReducer(
          state[action.payload.trackID],
          action
        )
      }

    default:
      return state
  }
}

const trackReducer = (state: ITrack, action: Action) => {
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

    case SCHEDULE_TRACK_CELL:
    case TOGGLE_TRACK_CELL:
    case CHANGE_CELL_NOTE:
      return {
        ...state,
        matrix: {}
      }

    case CHANGE_TRACK_LABEL:
      return {
        ...state,
        label: action.payload.label
      }

    default:
      return state
  }
}

const tracksReducer = (
  state: { [trackID: string]: ITrack },
  action: Action
) => {
  switch (action.type) {
    case CHANGE_TRACK_GAIN:
    case CHANGE_NOTE_RESOLUTION:
    case TOGGLE_TRACK_SOLO:
    case TOGGLE_TRACK_MUTE:
    case CHANGE_TRACK_LABEL:
      return {
        ...state,
        [action.payload.trackID]: trackReducer(
          state[action.payload.trackID],
          action
        )
      }

    case ADD_TRACK:
      return {
        ...state,
        [action.payload.trackID]: {
          id: action.payload.trackID,
          label: `[${action.payload.instrument.label}]`,
          noteResolution: 1,
          instrumentID: action.payload.instrument.id,
          color: getNextColor(state),
          processing: {
            gain: { gain: 1 }
          },
          muted: false,
          soloed: false
        }
      }

    default:
      return state
  }
}

function getNextColor(state: { [trackID: string]: ITrack }): MaterialColor {
  const colorsInUse = Object.keys(state).map(trackID => state[trackID].color)

  const filterColorsNotInUse = (color: MaterialColor) =>
    !colorsInUse.includes(color)
  const colorChoice = trackColors.filter(filterColorsNotInUse)

  if (colorChoice.length !== 0) {
    return colorChoice[0]
  }

  // pick a random color
  const randomIndex = Math.floor(Math.random() * (trackColors.length - 1))

  return trackColors[randomIndex]
}

const sessionReducer = (state: ISession = initialState, action: Action) => {
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
    case CHANGE_TRACK_LABEL:
      return {
        ...state,
        tracks: tracksReducer(state.tracks, action)
      }

    case CHANGE_CELL_NOTE:
    case SCHEDULE_TRACK_CELL:
    case CHANGE_CELL_GAIN:
      return {
        ...state,
        matrix: matrixReducer(state.matrix, action)
      }

    case TOGGLE_TRACK_CELL:
      if (state.activeTrackID === action.payload.trackID) {
        // same as SET_ACTIVE_CELL
        return {
          ...state,
          activeCellBeat: action.payload.beat
        }
      }

      // same as SCHEDULE_TRACK_CELL
      return {
        ...state,
        matrix: matrixReducer(state.matrix, action)
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

    case ADD_TRACK:
      return {
        ...state,
        // update trackOrder
        trackOrder: [...state.trackOrder, action.payload.trackID],
        // new entry in matrix
        matrix: matrixReducer(state.matrix, action),
        // new entry in tracks
        tracks: tracksReducer(state.tracks, action),
        // new entry in instruments
        instruments: instrumentsReducer(state.instruments, action),
        // update samples list
        samples: samplesReducer(state.samples, action)
      }

    default:
      return state
  }
}

export default sessionReducer

export function getOrderedTracks(state: ISession) {
  return state.trackOrder.map(trackID => {
    return state.tracks[trackID]
  })
}

export function getTrack(state: ISession, trackID: string) {
  return state.tracks[trackID]
}

export function getActiveTrack(state: ISession) {
  return state.activeTrackID ? state.tracks[state.activeTrackID] : null
}

export function getCellRow(state: ISession, trackID: string) {
  return state.matrix[trackID]
}

export function getCell(state: ISession, trackID: string, beat: number) {
  return getCellRow(state, trackID)[beat]
}

export function getActiveCell(state: ISession) {
  return state.activeTrackID !== null && state.activeCellBeat !== null
    ? getCellRow(state, state.activeTrackID)[state.activeCellBeat]
    : null
}

export function getInstrument(state: ISession, trackID: string) {
  const instrumentID = getTrack(state, trackID).instrumentID

  return state.instruments[instrumentID]
}

export function getInstrumentMapping(
  state: ISession,
  trackID: string | null,
  note: number
) {
  if (trackID === null) {
    return null
  }

  const instrument = getInstrument(state, trackID)
  const mapping = instrument.mapping["M" + note]

  return mapping ? mapping : null
}

export function getSample(
  state: ISession,
  trackID: string | null,
  note: number
) {
  const mapping = getInstrumentMapping(state, trackID, note)

  return mapping ? state.samples[mapping.sampleID] : null
}

export function getSolos(state: ISession) {
  const solos: { [trackID: string]: boolean } = {}
  state.trackOrder.forEach(trackID => {
    solos[trackID] = state.tracks[trackID].soloed
  })

  return solos
}

export function isSoloActive(state: ISession) {
  const solos = getSolos(state)

  return Object.keys(solos).reduce((acc, trackID) => {
    return solos[trackID] || acc
  }, false)
}

export function getMutes(state: ISession) {
  const mutes: { [trackID: string]: boolean } = {}
  state.trackOrder.forEach(trackID => {
    mutes[trackID] = state.tracks[trackID].muted
  })

  return mutes
}
