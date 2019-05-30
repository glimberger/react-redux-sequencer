//@flow strict
import { combineReducers } from "redux"

import audio from "./audio"
import session, * as fromSession from "./session"
import instruments, * as fromInstruments from "./instruments"
import samples, * as fromSamples from "./samples"

import type { Action as AudioAction } from "../actions/audio/types"
import type { Action as SessionAction } from "../actions/session/types"
import type { AudioState } from "../store/audio/types"
import type { Cell, Session, Track } from "../store/session/types"
import type {
  Instrument,
  InstrumentMapping,
  Instruments
} from "../store/instrument/types"
import type { Sample, Samples } from "../store/sample/types"

type AppState = {
  audio: AudioState,
  session: Session,
  instruments: Instruments,
  samples: Samples
}

export type AnyAction = AudioAction | SessionAction

export const initialSate: AppState = {
  audio: {
    ready: false,
    playing: false,
    mode: "PLAY",
    currentBeat: 0,
    events: []
  },
  session: {
    tempo: 120,
    masterGain: 1,
    activeTrackID: null,
    activeCellBeat: null,
    trackOrder: [],
    matrix: {},
    tracks: {},
    instruments: {},
    samples: {}
  },
  instruments: {},
  samples: {}
}

const rootReducer = combineReducers<{}, AnyAction>({
  audio,
  session,
  instruments,
  samples
})

export default rootReducer

export function getOrderedTracks(state: AppState) {
  return fromSession.getOrderedTracks(state.session)
}

export function getTrack(state: AppState, trackID: string): Track {
  return fromSession.getTrack(state.session, trackID)
}

export function getActiveTrack(state: AppState): ?Track {
  return fromSession.getActiveTrack(state.session)
}

export function getCellRow(state: AppState, trackID: string): Array<Cell> {
  return fromSession.getCellRow(state.session, trackID)
}

export function getCell(state: AppState, trackID: string, beat: number): Cell {
  return fromSession.getCell(state.session, trackID, beat)
}

export function getActiveCell(state: AppState): Cell | null {
  return fromSession.getActiveCell(state.session)
}

export function getInstrument(state: AppState, trackID: string): Instrument {
  return fromSession.getInstrument(state.session, trackID)
}

export function getInstrumentMapping(
  state: AppState,
  trackID: string | null,
  note: number
): InstrumentMapping | null {
  return fromSession.getInstrumentMapping(state.session, trackID, note)
}

export function getSample(
  state: AppState,
  trackID: string | null,
  note: number
): Sample | null {
  return fromSession.getSample(state.session, trackID, note)
}

export function getSolos(state: AppState): { [trackID: string]: boolean } {
  return fromSession.getSolos(state.session)
}

export function isSoloActive(state: AppState): boolean {
  return fromSession.isSoloActive(state.session)
}

export function getMutes(state: AppState): { [trackID: string]: boolean } {
  return fromSession.getMutes(state.session)
}

export function getInstrumentListIndexedByGroup(
  state: AppState
): { [group: string]: { [instrumentID: string]: Instrument } } {
  return fromInstruments.getInstrumentListIndexedByGroup(state.instruments)
}

export function getSamplesByIDs(
  state: AppState,
  sampleIDs: Array<string>
): Samples {
  return fromSamples.getSamplesByIDs(state.samples, sampleIDs)
}
