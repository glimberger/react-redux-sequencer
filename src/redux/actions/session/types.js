// @flow strict
import type { NoteResolution } from "../../store/session/types"

export const CHANGE_TEMPO = "CHANGE_TEMPO"
export const CHANGE_MASTER_GAIN = "CHANGE_MASTER_GAIN"
export const SCHEDULE_TRACK_CELL = "SCHEDULE_TRACK_CELL"
export const CHANGE_TRACK_GAIN = "CHANGE_TRACK_GAIN"
export const ADD_TRACK = "ADD_TRACK"
export const CHANGE_NOTE_RESOLUTION = "CHANGE_NOTE_RESOLUTION"
export const TOGGLE_TRACK_MUTE = "TOGGLE_TRACK_MUTE"
export const TOGGLE_TRACK_SOLO = "TOGGLE_TRACK_SOLO"
export const TOGGLE_ACTIVE_TRACK = "TOGGLE_ACTIVE_TRACK"
export const SET_ACTIVE_CELL = "SET_ACTIVE_CELL"
export const CHANGE_CELL_NOTE = "CHANGE_CELL_NOTE"

export type ChangeMasterGainAction = {|
  type: "CHANGE_MASTER_GAIN",
  payload: {| gain: number |}
|}

export type ChangeTrackGainAction = {|
  type: "CHANGE_TRACK_GAIN",
  payload: {| trackID: string, gain: number |}
|}

export type ChangeTempoAction = {|
  type: "CHANGE_TEMPO",
  payload: {| tempo: number |}
|}

export type ScheduleTrackCellAction = {|
  type: "SCHEDULE_TRACK_CELL",
  payload: {| trackID: string, beat: number |}
|}

export type AddTrackAction = {|
  type: "ADD_TRACK",
  payload: {| instrumentID: string |}
|}

export type ChangeNoteResolution = {|
  type: "CHANGE_NOTE_RESOLUTION",
  payload: {| noteResolution: NoteResolution, trackID: string |}
|}

export type ToggleTrackMuteAction = {|
  type: "TOGGLE_TRACK_MUTE",
  payload: {| trackID: string |}
|}

export type ToggleTrackSoloAction = {|
  type: "TOGGLE_TRACK_SOLO",
  payload: {| trackID: string |}
|}

export type ToggleActiveTrackAction = {|
  type: "TOGGLE_ACTIVE_TRACK",
  payload: {| trackID: string |}
|}

export type SetActiveCellAction = {|
  type: "SET_ACTIVE_CELL",
  payload: {| beat: number |}
|}

export type ChangeCellNoteAction = {|
  type: "CHANGE_CELL_NOTE",
  payload: {| note: number, beat: number, trackID: string |}
|}

export type Action =
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ChangeTempoAction
  | ScheduleTrackCellAction
  | AddTrackAction
  | ChangeNoteResolution
  | ToggleTrackMuteAction
  | ToggleTrackSoloAction
  | ToggleActiveTrackAction
  | SetActiveCellAction
  | ChangeCellNoteAction
