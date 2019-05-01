// @flow strict
import type { NoteResolution } from "../redux/store/session/types"

export const isCellPlayed = (
  noteResolution: NoteResolution,
  cellBeat: number,
  currentBeat: number
): boolean => {
  return noteResolution === 1
    ? cellBeat === currentBeat
    : noteResolution === 2
    ? cellBeat === currentBeat || cellBeat === currentBeat - 1
    : noteResolution === 4
    ? cellBeat === currentBeat ||
      cellBeat === currentBeat - 1 ||
      cellBeat === currentBeat - 2 ||
      cellBeat === currentBeat - 3
    : false
}
