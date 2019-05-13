// @flow strict
import { connect } from "react-redux"

import CellSettings from "./CellSettings"
import {
  getActiveCell,
  getActiveTrack,
  getInstrument
} from "../../../../../redux/reducers"
import {
  changeCellGain,
  scheduleTrackCell
} from "../../../../../redux/actions/session/creators"

const mapStateToProps = state => {
  const activeTrack = getActiveTrack(state)
  const activeCell = getActiveCell(state)

  return {
    color: activeTrack ? activeTrack.color : "grey",
    noteResolution: activeTrack ? activeTrack.noteResolution : 1,
    cell: activeCell,
    activeCellBeat: state.session.activeCellBeat,
    activeTrackID: state.session.activeTrackID,
    getMappingForNote: (note: number) =>
      getInstrument(state, state.session.activeTrackID).mapping[note]
  }
}

const CellSettingsWithConnect = connect(
  mapStateToProps,
  { scheduleTrackCell, changeCellGain }
)(CellSettings)

export default CellSettingsWithConnect
