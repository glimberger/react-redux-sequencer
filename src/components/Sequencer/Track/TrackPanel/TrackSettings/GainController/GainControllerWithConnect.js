// @flow strict
import { connect } from "react-redux"
import GainController from "./GainController"
import { getActiveTrack } from "../../../../../../redux/reducers"
import { changeTrackGain } from "../../../../../../redux/actions/session/creators"

const mapStateToProps = state => {
  const track = getActiveTrack(state)

  return {
    color: track ? track.color : "grey",
    gain: track ? track.processing.gain.gain : 1,
    activeTrackID: state.session.activeTrackID
  }
}

const GainControllerWithConnect = connect(
  mapStateToProps,
  { changeTrackGain }
)(GainController)

export default GainControllerWithConnect
