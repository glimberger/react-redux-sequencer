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
import type { Instrument, Instruments } from "../store/instrument/types"
import type { Samples } from "../store/sample/types"

type AppState = {
  audio: AudioState,
  session: Session,
  instruments: Instruments,
  samples: Samples
}

type AnyAction = AudioAction | SessionAction

const rootReducer = combineReducers<{}, AnyAction>({
  audio,
  session,
  instruments,
  samples
})

export default rootReducer

export function getOrderedTracks(state: {
  audio: AudioState,
  session: Session
}) {
  console.debug("[reducers/index.js] getOrderedTracks(", state, ")")
  return fromSession.getOrderedTracks(state.session)
}

export function getTrack(
  state: { audio: AudioState, session: Session },
  trackID: string
): Track {
  console.debug("[reducers/index.js] getTrack(", state, ",", trackID, ")")
  return fromSession.getTrack(state.session, trackID)
}

export function getActiveTrack(state: {
  audio: AudioState,
  session: Session
}): ?Track {
  console.debug("[reducers/index.js] getTrack(", state, ")")
  return fromSession.getActiveTrack(state.session)
}

export function getCellRow(
  state: { audio: AudioState, session: Session },
  trackID: string
): Array<Cell> {
  console.debug("[reducers/index.js] getCellRow(", state, ",", trackID, ")")
  return fromSession.getCellRow(state.session, trackID)
}

export function getCell(
  state: { audio: AudioState, session: Session },
  trackID: string,
  beat: number
): Cell {
  console.debug("[reducers/index.js] getCell(", state, ",", trackID, ")")
  return fromSession.getCell(state.session, trackID, beat)
}

export function getActiveCell(state: {
  audio: AudioState,
  session: Session
}): ?Cell {
  console.debug("[reducers/index.js] getActiveCell(", state, ")")
  return fromSession.getActiveCell(state.session)
}

export function getInstrument(
  state: {
    audio: AudioState,
    session: Session
  },
  trackID: string
): Instrument {
  console.debug("[reducers/index.js] getInstrument(", state, ",", trackID, ")")
  return fromSession.getInstrument(state.session, trackID)
}

export function getSample(
  state: { audio: AudioState, session: Session },
  trackID: string,
  note: number
) {
  console.debug(
    "[reducers/index.js] getSample(",
    state.session,
    trackID,
    note,
    ")"
  )
  return fromSession.getSample(state.session, trackID, note)
}

export function getSolos(state: {
  audio: AudioState,
  session: Session
}): { [trackID: string]: boolean } {
  console.debug("[reducers/index.js] getSolos(", state, ")")
  return fromSession.getSolos(state.session)
}

export function isSoloActive(state: {
  audio: AudioState,
  session: Session
}): boolean {
  return fromSession.isSoloActive(state.session)
}

export function getMutes(state: {
  audio: AudioState,
  session: Session
}): { [trackID: string]: boolean } {
  console.debug("[reducers/index.js] getMutes(", state, ")")
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
