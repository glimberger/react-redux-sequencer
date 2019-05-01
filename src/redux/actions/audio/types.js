// @flow strict
export const RESET_TRANSPORT = "RESET_TRANSPORT"
export const TOGGLE_PLAY = "TOGGLE_PLAY"
export const ANNOUNCE_BEAT = "ANNOUNCE_BEAT"
export const CLEAR_EVENT_QUEUE = "CLEAR_EVENT_QUEUE"
export const SET_AUDIO_ENGINE_READY = "SET_AUDIO_ENGINE_READY"

export type AnnounceBeatAction = {
  type: "ANNOUNCE_BEAT",
  payload: {| beat: number |}
}

export type ClearEventQueueAction = {|
  type: "CLEAR_EVENT_QUEUE"
|}

export type ResetTransportAction = {| type: "RESET_TRANSPORT" |}

export type TogglePlayAction = {| type: "TOGGLE_PLAY" |}

export type SetAudioEngineReady = {|
  type: "SET_AUDIO_ENGINE_READY"
|}

export type Action =
  | AnnounceBeatAction
  | ClearEventQueueAction
  | ResetTransportAction
  | TogglePlayAction
  | SetAudioEngineReady
