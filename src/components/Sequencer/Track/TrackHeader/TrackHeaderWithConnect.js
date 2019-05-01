// @flow strict
import { connect } from "react-redux"

import TrackHeader from "./TrackHeader"
import { getTrack } from "../../../../redux/reducers"
import {
  toggleActiveTrack,
  toggleMuteTrack,
  toggleSoloTrack
} from "../../../../redux/actions/session/creators"

const mapStateToProps = (state, ownProps) => {
  const track = getTrack(state, ownProps.trackID)

  return {
    label: track.label,
    color: track.color,
    gain: track.processing.gain.gain,
    muted: track.muted,
    soloed: track.soloed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMuteClick: () => dispatch(toggleMuteTrack(ownProps.trackID)),
  onSoloClick: () => dispatch(toggleSoloTrack(ownProps.trackID)),
  onTitleClick: () => dispatch(toggleActiveTrack(ownProps.trackID))
})

const TrackHeaderWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackHeader)

export default TrackHeaderWithConnect
