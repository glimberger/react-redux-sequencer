import { NoteResolution } from "../redux/store/session/interfaces"

/**
 * Check if a cell is played regarding the current note resolution
 *
 * @param noteResolution
 * @param cellBeat
 * @param currentBeat
 * @return {boolean}
 */
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
