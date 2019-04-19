// @flow strict

import type {
  ChangeTrackGainAction,
  ChangeMasterGainAction,
  ChangeTempoAction,
  ScheduleTrackCellAction,
  ChangeNoteResolution
} from "./types"
import {
  CHANGE_TRACK_GAIN,
  CHANGE_MASTER_GAIN,
  CHANGE_TEMPO,
  SCHEDULE_TRACK_CELL,
  CHANGE_NOTE_RESOLUTION
} from "./types"
import type { NoteResolution } from "../../store/session/types"

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
