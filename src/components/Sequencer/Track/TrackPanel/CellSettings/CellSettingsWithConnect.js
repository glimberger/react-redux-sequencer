// @flow strict
import { connect } from "react-redux"

import CellSettings from "./CellSettings"
import {
  getActiveCell,
  getActiveTrack,
  getInstrument
} from "../../../../../redux/reducers"
import { scheduleTrackCell } from "../../../../../redux/actions/session/creators"

const mapStateToProps = state => {
  const activeTrack = getActiveTrack(state)
  const activeCell = getActiveCell(state)

  return {
    color: activeTrack ? activeTrack.color : "grey",
    noteResolution: activeTrack ? activeTrack.noteResolution : 1,
    scheduled: activeCell ? activeCell.scheduled : false,
    midiNote: activeCell ? activeCell.midi : 0,
    isActiveTrack: !!activeTrack,
    activeCellBeat: state.session.activeCellBeat,
    activeTrackID: state.session.activeTrackID,
    getMappingForNote: (note: number) =>
      getInstrument(state, state.session.activeTrackID).mapping[note]
  }
}

const CellSettingsWithConnect = connect(
  mapStateToProps,
  { scheduleTrackCell }
)(CellSettings)

export default CellSettingsWithConnect
