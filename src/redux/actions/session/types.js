// @flow strict
import type { NoteResolution } from "../../store/session/types"

export const CHANGE_TEMPO = "CHANGE_TEMPO"
export const CHANGE_MASTER_GAIN = "CHANGE_MASTER_GAIN"
export const SCHEDULE_TRACK_CELL = "SCHEDULE_TRACK_CELL"
export const CHANGE_TRACK_GAIN = "CHANGE_TRACK_GAIN"
export const ADD_TRACK = "ADD_TRACK"
export const CHANGE_NOTE_RESOLUTION = "CHANGE_NOTE_RESOLUTION"

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

export type Action =
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ChangeTempoAction
  | ScheduleTrackCellAction
  | AddTrackAction
  | ChangeNoteResolution
