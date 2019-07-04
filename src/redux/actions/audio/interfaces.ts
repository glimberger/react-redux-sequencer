export const RESET_TRANSPORT = "RESET_TRANSPORT"
export const TOGGLE_PLAY = "TOGGLE_PLAY"
export const ANNOUNCE_BEAT = "ANNOUNCE_BEAT"
export const CLEAR_EVENT_QUEUE = "CLEAR_EVENT_QUEUE"
export const SET_AUDIO_ENGINE_READY = "SET_AUDIO_ENGINE_READY"
export const LISTEN_CELL_NOTE = "LISTEN_CELL_NOTE"

export interface IAnnounceBeatAction {
  type: "ANNOUNCE_BEAT"
  payload: { beat: number }
}

export interface IClearEventQueueAction {
  type: "CLEAR_EVENT_QUEUE"
}

export interface IResetTransportAction {
  type: "RESET_TRANSPORT"
}

export interface ITogglePlayAction {
  type: "TOGGLE_PLAY"
}

export interface ISetAudioEngineReady {
  type: "SET_AUDIO_ENGINE_READY"
}

export interface IListenCellNoteAction {
  type: "LISTEN_CELL_NOTE"
  payload: {
    note: number
    beat: number
    trackID: string
  }
}

export type Action =
  | IAnnounceBeatAction
  | IClearEventQueueAction
  | IResetTransportAction
  | ITogglePlayAction
  | ISetAudioEngineReady
  | IListenCellNoteAction
