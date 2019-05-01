// @flow strict

import {
  ANNOUNCE_BEAT,
  CLEAR_EVENT_QUEUE,
  TOGGLE_PLAY,
  SET_AUDIO_ENGINE_READY,
  RESET_TRANSPORT
} from "./types"

import type {
  AnnounceBeatAction,
  ClearEventQueueAction,
  ResetTransportAction,
  SetAudioEngineReady,
  TogglePlayAction
} from "./types"

export function resetTransport(): ResetTransportAction {
  return { type: RESET_TRANSPORT }
}

export function togglePlay(): TogglePlayAction {
  return { type: TOGGLE_PLAY }
}

export function announceBeat(beat: number): AnnounceBeatAction {
  return {
    type: ANNOUNCE_BEAT,
    payload: { beat }
  }
}

export function clearEventQueue(): ClearEventQueueAction {
  return { type: CLEAR_EVENT_QUEUE }
}

export function setAudioEngineReady(): SetAudioEngineReady {
  return {
    type: SET_AUDIO_ENGINE_READY
  }
}
