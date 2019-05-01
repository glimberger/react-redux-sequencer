// @flow strict
import { connect } from "react-redux"

import CellRow from "./CellRow"
import { getCellRow, getTrack } from "../../../../redux/reducers"
import {
  scheduleTrackCell,
  setActiveCell
} from "../../../../redux/actions/session/creators"

const mapStateToProps = (state, ownProps) => {
  const track = getTrack(state, ownProps.trackID)

  return {
    currentBeat: state.audio.currentBeat,
    color: track.color,
    noteResolution: track.noteResolution,
    activeCellBeat: state.session.activeCellBeat,
    activeTrackID: state.session.activeTrackID,
    cells: getCellRow(state, ownProps.trackID)
  }
}

const CellRowWithConnect = connect(
  mapStateToProps,
  {
    scheduleTrackCell,
    setActiveCell
  }
)(CellRow)

export default CellRowWithConnect
