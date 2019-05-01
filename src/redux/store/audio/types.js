// @flow strict

import type { TogglePlayAction } from "../../actions/audio/types"
import type {
  ChangeMasterGainAction,
  ChangeTrackGainAction,
  ScheduleTrackCellAction
} from "../../actions/session/types"

export type AudioState = {|
  ready: boolean,
  playing: boolean,
  mode: "EDIT" | "PLAY",
  currentBeat: number,
  // currentTrackPanel: string | null,
  // currentCellPanel: {| beat: number, trackID: string |} | null,
  // mutes: {
  //   [trackID: string]: {| enabled: boolean |}
  // },
  // solos: {
  //   [trackID: string]: {| enabled: boolean |}
  // },
  events: Array<Event>
|}

export type Event =
  | TogglePlayAction
  | ChangeMasterGainAction
  | ChangeTrackGainAction
  | ScheduleTrackCellAction
