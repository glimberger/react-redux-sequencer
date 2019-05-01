// @flow strict
import { connect } from "react-redux"

import ResolutionSwitch from "./ResolutionSwitch"
import { getActiveTrack } from "../../../../../../redux/reducers"
import { changeNoteResolution } from "../../../../../../redux/actions/session/creators"

const mapStateToProps = state => {
  const track = getActiveTrack(state)

  return {
    color: track ? track.color : "grey",
    noteResolution: track ? track.noteResolution : 1,
    activeTrackID: state.session.activeTrackID
  }
}

const ResolutionSwitchWithConnect = connect(
  mapStateToProps,
  { changeNoteResolution }
)(ResolutionSwitch)

export default ResolutionSwitchWithConnect
