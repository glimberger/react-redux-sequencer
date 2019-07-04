import { NoteResolution } from "../../store/session/interfaces"
import { IInstrument } from "../../store/instrument/interfaces"
import { ISamples } from "../../store/sample/interfaces"

export const CHANGE_TEMPO = "CHANGE_TEMPO"
export const CHANGE_MASTER_GAIN = "CHANGE_MASTER_GAIN"
export const SCHEDULE_TRACK_CELL = "SCHEDULE_TRACK_CELL"
export const TOGGLE_TRACK_CELL = "TOGGLE_TRACK_CELL"
export const ADD_TRACK = "ADD_TRACK"
export const CHANGE_TRACK_GAIN = "CHANGE_TRACK_GAIN"
export const CHANGE_NOTE_RESOLUTION = "CHANGE_NOTE_RESOLUTION"
export const TOGGLE_TRACK_MUTE = "TOGGLE_TRACK_MUTE"
export const TOGGLE_TRACK_SOLO = "TOGGLE_TRACK_SOLO"
export const CHANGE_TRACK_LABEL = "CHANGE_TRACK_LABEL"
export const TOGGLE_ACTIVE_TRACK = "TOGGLE_ACTIVE_TRACK"
export const SET_ACTIVE_CELL = "SET_ACTIVE_CELL"
export const CHANGE_CELL_NOTE = "CHANGE_CELL_NOTE"
export const CHANGE_CELL_GAIN = "CHANGE_CELL_GAIN"

export interface IChangeMasterGainAction {
  type: "CHANGE_MASTER_GAIN"
  payload: { gain: number }
}

export interface IChangeTrackGainAction {
  type: "CHANGE_TRACK_GAIN"
  payload: { trackID: string; gain: number }
}

export interface IChangeTempoAction {
  type: "CHANGE_TEMPO"
  payload: { tempo: number }
}

export interface IScheduleTrackCellAction {
  type: "SCHEDULE_TRACK_CELL"
  payload: { trackID: string; beat: number }
}

export interface IToggleTrackCellAction {
  type: "TOGGLE_TRACK_CELL"
  payload: { trackID: string; beat: number }
}

export interface IAddTrackAction {
  type: "ADD_TRACK"
  payload: { trackID: string; instrument: IInstrument; samples: ISamples }
}

export interface IChangeNoteResolution {
  type: "CHANGE_NOTE_RESOLUTION"
  payload: { noteResolution: NoteResolution; trackID: string }
}

export interface IToggleTrackMuteAction {
  type: "TOGGLE_TRACK_MUTE"
  payload: { trackID: string }
}

export interface IToggleTrackSoloAction {
  type: "TOGGLE_TRACK_SOLO"
  payload: { trackID: string }
}

export interface IToggleActiveTrackAction {
  type: "TOGGLE_ACTIVE_TRACK"
  payload: { trackID: string }
}

export interface ISetActiveCellAction {
  type: "SET_ACTIVE_CELL"
  payload: { beat: number }
}

export interface IChangeCellNoteAction {
  type: "CHANGE_CELL_NOTE"
  payload: { note: number; beat: number; trackID: string }
}

export interface IChangeTrackLabelAction {
  type: "CHANGE_TRACK_LABEL"
  payload: { label: string; trackID: string }
}

export interface IChangeCellGainAction {
  type: "CHANGE_CELL_GAIN"
  payload: { gain: number; beat: number; trackID: string }
}

export type Action =
  | IChangeMasterGainAction
  | IChangeTrackGainAction
  | IChangeTempoAction
  | IScheduleTrackCellAction
  | IToggleTrackCellAction
  | IAddTrackAction
  | IChangeNoteResolution
  | IToggleTrackMuteAction
  | IToggleTrackSoloAction
  | IToggleActiveTrackAction
  | ISetActiveCellAction
  | IChangeCellNoteAction
  | IChangeTrackLabelAction
  | IChangeCellGainAction
