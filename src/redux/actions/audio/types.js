// @flow strict
export const RESET_TRANSPORT = "RESET_TRANSPORT"
export const TOGGLE_PLAY = "TOGGLE_PLAY"
export const ANNOUNCE_BEAT = "ANNOUNCE_BEAT"
export const CLEAR_EVENT_QUEUE = "CLEAR_EVENT_QUEUE"
export const TOGGLE_MUTE_TRACK = "TOGGLE_MUTE_TRACK"
export const TOGGLE_SOLO_TRACK = "TOGGLE_SOLO_TRACK"
export const TOGGLE_TRACK_PANEL = "TOGGLE_TRACK_PANEL"
export const HIDE_TRACK_PANEL = "HIDE_TRACK_PANEL"
export const TOGGLE_CELL_PANEL = "TOGGLE_CELL_PANEL"
export const SET_PLAY_MODE = "SET_PLAY_MODE"
export const SET_EDIT_MODE = "SET_EDIT_MODE"
export const SET_AUDIO_ENGINE_READY = "SET_AUDIO_ENGINE_READY"

export type AnnounceBeatAction = {
  type: "ANNOUNCE_BEAT",
  payload: {| beat: number |}
}

export type ClearEventQueueAction = {|
  type: "CLEAR_EVENT_QUEUE"
|}

export type ToggleMuteTrackAction = {|
  type: "TOGGLE_MUTE_TRACK",
  payload: {| trackID: string |}
|}

export type ToggleSoloTrackAction = {|
  type: "TOGGLE_SOLO_TRACK",
  payload: {| trackID: string |}
|}

export type ResetTransportAction = {| type: "RESET_TRANSPORT" |}

export type TogglePlayAction = {| type: "TOGGLE_PLAY" |}

export type ToggleTrackPanelAction = {|
  type: "TOGGLE_TRACK_PANEL",
  payload: {| trackID: string |}
|}

export type ToggleCellPanelAction = {|
  type: "TOGGLE_CELL_PANEL",
  payload: {| beat: number, trackID: string |}
|}

export type HideTrackPanel = {|
  type: "HIDE_TRACK_PANEL",
  payload: {| trackID: string |}
|}

export type SetPlayModeAction = {|
  type: "SET_PLAY_MODE"
|}

export type SetEditModeAction = {|
  type: "SET_EDIT_MODE"
|}

export type SetAudioEngineReady = {|
  type: "SET_AUDIO_ENGINE_READY"
|}

export type Action =
  | AnnounceBeatAction
  | ClearEventQueueAction
  | ToggleMuteTrackAction
  | ToggleSoloTrackAction
  | ToggleCellPanelAction
  | ResetTransportAction
  | TogglePlayAction
  | ToggleTrackPanelAction
  | HideTrackPanel
  | SetPlayModeAction
  | SetEditModeAction
  | SetAudioEngineReady
