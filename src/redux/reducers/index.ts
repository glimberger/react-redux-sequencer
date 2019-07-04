import { combineReducers } from "redux"

import audio from "./audio"
import session, * as fromSession from "./session"
import instruments, * as fromInstruments from "./instruments"
import samples, * as fromSamples from "./samples"

import { Action as AudioAction } from "../actions/audio/interfaces"
import { Action as SessionAction } from "../actions/session/interfaces"
import { IAudioState } from "../store/audio/interfaces"
import { ISession } from "../store/session/interfaces"
import { IInstrument, IInstruments } from "../store/instrument/interfaces"
import { ISamples } from "../store/sample/interfaces"

interface IAppState {
  audio: IAudioState
  session: ISession
  instruments: IInstruments
  samples: ISamples
}

export type AnyAction = AudioAction | SessionAction

export const initialSate: IAppState = {
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

export function getOrderedTracks(state: IAppState) {
  return fromSession.getOrderedTracks(state.session)
}

export function getTrack(state: IAppState, trackID: string) {
  return fromSession.getTrack(state.session, trackID)
}

export function getActiveTrack(state: IAppState) {
  return fromSession.getActiveTrack(state.session)
}

export function getCellRow(state: IAppState, trackID: string) {
  return fromSession.getCellRow(state.session, trackID)
}

export function getCell(state: IAppState, trackID: string, beat: number) {
  return fromSession.getCell(state.session, trackID, beat)
}

export function getActiveCell(state: IAppState) {
  return fromSession.getActiveCell(state.session)
}

export function getInstrument(state: IAppState, trackID: string): IInstrument {
  return fromSession.getInstrument(state.session, trackID)
}

export function getInstrumentMapping(
  state: IAppState,
  trackID: string | null,
  note: number
) {
  return fromSession.getInstrumentMapping(state.session, trackID, note)
}

export function getSample(
  state: IAppState,
  trackID: string | null,
  note: number
) {
  return fromSession.getSample(state.session, trackID, note)
}

export function getSolos(state: IAppState) {
  return fromSession.getSolos(state.session)
}

export function isSoloActive(state: IAppState) {
  return fromSession.isSoloActive(state.session)
}

export function getMutes(state: IAppState) {
  return fromSession.getMutes(state.session)
}

export function getInstrumentListIndexedByGroup(state: IAppState) {
  return fromInstruments.getInstrumentListIndexedByGroup(state.instruments)
}

export function getSamplesByIDs(state: IAppState, sampleIDs: string[]) {
  return fromSamples.getSamplesByIDs(state.samples, sampleIDs)
}
