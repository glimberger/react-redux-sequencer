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
  return fromSession.getOrderedTracks(state.session)
}

export function getTrack(
  state: { audio: AudioState, session: Session },
  trackID: string
): Track {
  return fromSession.getTrack(state.session, trackID)
}

export function getActiveTrack(state: {
  audio: AudioState,
  session: Session
}): ?Track {
  return fromSession.getActiveTrack(state.session)
}

export function getCellRow(
  state: { audio: AudioState, session: Session },
  trackID: string
): Array<Cell> {
  return fromSession.getCellRow(state.session, trackID)
}

export function getCell(
  state: { audio: AudioState, session: Session },
  trackID: string,
  beat: number
): Cell {
  return fromSession.getCell(state.session, trackID, beat)
}

export function getActiveCell(state: {
  audio: AudioState,
  session: Session
}): ?Cell {
  return fromSession.getActiveCell(state.session)
}

export function getInstrument(
  state: {
    audio: AudioState,
    session: Session
  },
  trackID: string
): Instrument {
  return fromSession.getInstrument(state.session, trackID)
}

export function getSample(
  state: { audio: AudioState, session: Session },
  trackID: string,
  note: number
) {
  return fromSession.getSample(state.session, trackID, note)
}

export function getSolos(state: {
  audio: AudioState,
  session: Session
}): { [trackID: string]: boolean } {
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
