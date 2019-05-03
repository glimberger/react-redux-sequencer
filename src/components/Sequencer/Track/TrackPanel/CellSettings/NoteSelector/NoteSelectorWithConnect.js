// @flow strict
import { connect } from "react-redux"

import NoteSelector from "./NoteSelector"
import {
  getActiveCell,
  getActiveTrack,
  getInstrument,
  getSample
} from "../../../../../../redux/reducers"
import { changeCellNote } from "../../../../../../redux/actions/session/creators"
import { listenCellNote } from "../../../../../../redux/actions/audio/creators"

const mapStateToProps = state => {
  const track = getActiveTrack(state)
  const cell = getActiveCell(state)
  console.log("cell", cell)

  return {
    color: track ? track.color : "grey",
    activeNote: cell ? cell.midi : 0,
    activeTrackID: state.session.activeTrackID,
    activeCellBeat: state.session.activeCellBeat,
    getMappingForNote: (note: number) =>
      getInstrument(state, state.session.activeTrackID).mapping[note],
    getSample: (note: number) =>
      getSample(state, state.session.activeTrackID, note)
  }
}

const NoteSelectorWithConnect = connect(
  mapStateToProps,
  { changeCellNote, listenCellNote }
)(NoteSelector)

export default NoteSelectorWithConnect
