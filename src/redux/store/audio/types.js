// @flow strict

import type {
  ListenCellNoteAction,
  TogglePlayAction
} from "../../actions/audio/types"
import type {
  AddTrackAction,
  ChangeCellNoteAction,
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction, ToggleTrackCellAction
} from "../../actions/session/types"

export type AudioState = {|
  ready: boolean,
  playing: boolean,
  mode: "EDIT" | "PLAY",
  currentBeat: number,
  events: Array<Event>
|}

export type Event =
  | TogglePlayAction
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction
  | ToggleTrackCellAction
  | ListenCellNoteAction
  | ChangeCellNoteAction
  | AddTrackAction
