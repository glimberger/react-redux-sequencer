// @flow strict

import {
  ANNOUNCE_BEAT,
  CLEAR_EVENT_QUEUE,
  TOGGLE_MUTE_TRACK,
  TOGGLE_SOLO_TRACK,
  TOGGLE_PLAY,
  TOGGLE_TRACK_PANEL,
  SET_PLAY_MODE,
  SET_EDIT_MODE,
  SET_AUDIO_ENGINE_READY,
  TOGGLE_CELL_PANEL,
  RESET_TRANSPORT
} from "./types"

import type {
  AnnounceBeatAction,
  ClearEventQueueAction,
  ResetTransportAction,
  SetAudioEngineReady,
  SetEditModeAction,
  SetPlayModeAction,
  ToggleTrackPanelAction,
  ToggleCellPanelAction,
  ToggleMuteTrackAction,
  TogglePlayAction,
  ToggleSoloTrackAction
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

export function toggleMuteTrack(trackID: string): ToggleMuteTrackAction {
  return {
    type: TOGGLE_MUTE_TRACK,
    payload: { trackID }
  }
}

export function toggleSoloTrack(trackID: string): ToggleSoloTrackAction {
  return {
    type: TOGGLE_SOLO_TRACK,
    payload: { trackID }
  }
}

export function toggleCellPanel(
  beat: number,
  trackID: string
): ToggleCellPanelAction {
  return {
    type: TOGGLE_CELL_PANEL,
    payload: { beat, trackID }
  }
}

export function toggleTrackPanel(trackID: string): ToggleTrackPanelAction {
  return {
    type: TOGGLE_TRACK_PANEL,
    payload: { trackID }
  }
}

export function setPlayMode(): SetPlayModeAction {
  return {
    type: SET_PLAY_MODE
  }
}

export function setEditMode(): SetEditModeAction {
  return {
    type: SET_EDIT_MODE
  }
}

export function setAudioEngineReady(): SetAudioEngineReady {
  return {
    type: SET_AUDIO_ENGINE_READY
  }
}
