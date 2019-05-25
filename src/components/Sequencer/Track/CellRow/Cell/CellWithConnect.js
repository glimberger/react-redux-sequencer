// @flow strict
import { connect } from "react-redux"

import Cell from "./Cell"
import { isCellPlayed } from "../../../../../services/cell"
import {
  scheduleTrackCell,
  setActiveCell
} from "../../../../../redux/actions/session/creators"

import type { AppState } from "../../../../../redux/store/configureStore"
import type { OwnProps } from "./Cell"

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const track = state.session.tracks[ownProps.trackID]
  const cell = state.session.matrix[ownProps.trackID][ownProps.beatNumber]

  return {
    activeTrackID: state.session.activeTrackID,
    color: track.color,
    noteResolution: track.noteResolution,
    processing: cell.processing,
    played: isCellPlayed(
      track.noteResolution,
      ownProps.beatNumber,
      state.audio.currentBeat
    ),
    scheduled: cell.scheduled,
    edited:
      ownProps.trackID === state.session.activeTrackID &&
      ownProps.beatNumber === state.session.activeCellBeat,
    // we don't want to keep cells out of note resolution
    rendered: ownProps.beatNumber % track.noteResolution === 0
  }
}

const mapDispatchToProps = (dispatch, ownProps: OwnProps) => ({
  onClick: (activeTrackID: string | null) => {
    ownProps.trackID === activeTrackID
      ? dispatch(setActiveCell(ownProps.beatNumber))
      : dispatch(scheduleTrackCell(ownProps.beatNumber, ownProps.trackID))
  }
})

const CellWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)

export default CellWithConnect
