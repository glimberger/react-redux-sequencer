import {
  IChangeTrackGainAction,
  IChangeMasterGainAction,
  IChangeTempoAction,
  IScheduleTrackCellAction,
  IChangeNoteResolution,
  IToggleTrackMuteAction,
  IToggleTrackSoloAction,
  ISetActiveCellAction,
  IToggleActiveTrackAction,
  IChangeCellNoteAction,
  IAddTrackAction,
  IChangeTrackLabelAction,
  IChangeCellGainAction,
  IToggleTrackCellAction,
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
  CHANGE_CELL_GAIN,
  TOGGLE_TRACK_CELL
} from "./interfaces"
import { NoteResolution } from "../../store/session/interfaces"
import { IInstrument } from "../../store/instrument/interfaces"
import { ISamples } from "../../store/sample/interfaces"

export function changeTempo(tempo: number): IChangeTempoAction {
  return {
    type: CHANGE_TEMPO,
    payload: { tempo }
  }
}

export function changeMasterGain(gain: number): IChangeMasterGainAction {
  return {
    type: CHANGE_MASTER_GAIN,
    payload: { gain }
  }
}

export function changeTrackGain(
  trackID: string,
  gain: number
): IChangeTrackGainAction {
  return {
    type: CHANGE_TRACK_GAIN,
    payload: { trackID, gain }
  }
}

export function scheduleTrackCell(
  beat: number,
  trackID: string
): IScheduleTrackCellAction {
  return {
    type: SCHEDULE_TRACK_CELL,
    payload: { beat, trackID }
  }
}

export function toggleTrackCell(
  beat: number,
  trackID: string
): IToggleTrackCellAction {
  return {
    type: TOGGLE_TRACK_CELL,
    payload: { beat, trackID }
  }
}

export function changeNoteResolution(
  noteResolution: NoteResolution,
  trackID: string
): IChangeNoteResolution {
  return {
    type: CHANGE_NOTE_RESOLUTION,
    payload: { noteResolution, trackID }
  }
}

export function toggleMuteTrack(trackID: string): IToggleTrackMuteAction {
  return {
    type: TOGGLE_TRACK_MUTE,
    payload: { trackID }
  }
}

export function toggleSoloTrack(trackID: string): IToggleTrackSoloAction {
  return {
    type: TOGGLE_TRACK_SOLO,
    payload: { trackID }
  }
}

export function toggleActiveTrack(trackID: string): IToggleActiveTrackAction {
  return {
    type: TOGGLE_ACTIVE_TRACK,
    payload: { trackID }
  }
}

export function setActiveCell(beat: number): ISetActiveCellAction {
  return {
    type: SET_ACTIVE_CELL,
    payload: { beat }
  }
}

export function changeCellNote(
  note: number,
  beat: number,
  trackID: string
): IChangeCellNoteAction {
  return {
    type: CHANGE_CELL_NOTE,
    payload: { note, beat, trackID }
  }
}

export function addTrack(
  trackID: string,
  instrument: IInstrument,
  samples: ISamples
): IAddTrackAction {
  return {
    type: ADD_TRACK,
    payload: { trackID, instrument, samples }
  }
}

export function changeTrackLabel(
  label: string,
  trackID: string
): IChangeTrackLabelAction {
  return {
    type: CHANGE_TRACK_LABEL,
    payload: { label, trackID }
  }
}

export function changeCellGain(
  gain: number,
  beat: number,
  trackID: string
): IChangeCellGainAction {
  return {
    type: CHANGE_CELL_GAIN,
    payload: { gain, beat, trackID }
  }
}
