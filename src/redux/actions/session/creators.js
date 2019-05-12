// @flow strict

import type {
  ChangeTrackGainAction,
  ChangeMasterGainAction,
  ChangeTempoAction,
  ScheduleTrackCellAction,
  ChangeNoteResolution,
  ToggleTrackMuteAction,
  ToggleTrackSoloAction,
  SetActiveCellAction,
  ToggleActiveTrackAction,
  ChangeCellNoteAction,
  AddTrackAction,
  ChangeTrackLabelAction,
  ChangeCellGainAction
} from "./types"
import {
  CHANGE_TRACK_GAIN,
  CHANGE_MASTER_GAIN,
  CHANGE_TEMPO,
  SCHEDULE_TRACK_CELL,
  CHANGE_NOTE_RESOLUTION,
  TOGGLE_TRACK_MUTE,
  TOGGLE_TRACK_SOLO,
  SET_ACTIVE_CELL,
  TOGGLE_ACTIVE_TRACK,
  CHANGE_CELL_NOTE,
  ADD_TRACK,
  CHANGE_TRACK_LABEL,
  CHANGE_CELL_GAIN
} from "./types"
import type { NoteResolution } from "../../store/session/types"
import type { Instrument } from "../../store/instrument/types"
import type { Samples } from "../../store/sample/types"

export function changeTempo(tempo: number): ChangeTempoAction {
  return {
    type: CHANGE_TEMPO,
    payload: { tempo }
  }
}

export function changeMasterGain(gain: number): ChangeMasterGainAction {
  return {
    type: CHANGE_MASTER_GAIN,
    payload: { gain }
  }
}

export function changeTrackGain(
  trackID: string,
  gain: number
): ChangeTrackGainAction {
  return {
    type: CHANGE_TRACK_GAIN,
    payload: { trackID, gain }
  }
}

export function scheduleTrackCell(
  beat: number,
  trackID: string
): ScheduleTrackCellAction {
  return {
    type: SCHEDULE_TRACK_CELL,
    payload: { beat, trackID }
  }
}

export function changeNoteResolution(
  noteResolution: NoteResolution,
  trackID: string
): ChangeNoteResolution {
  return {
    type: CHANGE_NOTE_RESOLUTION,
    payload: { noteResolution, trackID }
  }
}

export function toggleMuteTrack(trackID: string): ToggleTrackMuteAction {
  return {
    type: TOGGLE_TRACK_MUTE,
    payload: { trackID }
  }
}

export function toggleSoloTrack(trackID: string): ToggleTrackSoloAction {
  return {
    type: TOGGLE_TRACK_SOLO,
    payload: { trackID }
  }
}

export function toggleActiveTrack(trackID: string): ToggleActiveTrackAction {
  return {
    type: TOGGLE_ACTIVE_TRACK,
    payload: { trackID }
  }
}

export function setActiveCell(beat: number): SetActiveCellAction {
  return {
    type: SET_ACTIVE_CELL,
    payload: { beat }
  }
}

export function changeCellNote(
  note: number,
  beat: number,
  trackID: string
): ChangeCellNoteAction {
  return {
    type: CHANGE_CELL_NOTE,
    payload: { note, beat, trackID }
  }
}

export function addTrack(
  trackID: string,
  instrument: Instrument,
  samples: Samples
): AddTrackAction {
  return {
    type: ADD_TRACK,
    payload: { trackID, instrument, samples }
  }
}

export function changeTrackLabel(
  label: string,
  trackID: string
): ChangeTrackLabelAction {
  return {
    type: CHANGE_TRACK_LABEL,
    payload: { label, trackID }
  }
}

export function changeCellGain(
  gain: number,
  beat: number,
  trackID: string
): ChangeCellGainAction {
  return {
    type: CHANGE_CELL_GAIN,
    payload: { gain, beat, trackID }
  }
}
