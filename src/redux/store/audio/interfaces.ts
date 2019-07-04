import {
  IListenCellNoteAction,
  ITogglePlayAction
} from "../../actions/audio/interfaces"
import {
  IAddTrackAction,
  IChangeCellNoteAction,
  IChangeMasterGainAction,
  IChangeTrackGainAction,
  IScheduleTrackCellAction,
  IToggleTrackCellAction
} from "../../actions/session/interfaces"

export interface IAudioState {
  ready: boolean
  playing: boolean
  mode: "EDIT" | "PLAY"
  currentBeat: number
  events: Event[]
}

export type Event =
  | ITogglePlayAction
  | IChangeMasterGainAction
  | IChangeTrackGainAction
  | IScheduleTrackCellAction
  | IToggleTrackCellAction
  | IListenCellNoteAction
  | IChangeCellNoteAction
  | IAddTrackAction
