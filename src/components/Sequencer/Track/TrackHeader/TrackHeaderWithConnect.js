// @flow strict
import { connect } from "react-redux"

import TrackHeader from "./TrackHeader"
import {
  changeTrackLabel,
  toggleActiveTrack,
  toggleMuteTrack,
  toggleSoloTrack
} from "../../../../redux/actions/session/creators"

import type { AppState } from '../../../../redux/store/configureStore'
import type { OwnProps } from './TrackHeader'

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const track = state.session.tracks[ownProps.trackID]

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
  onTitleClick: () => dispatch(toggleActiveTrack(ownProps.trackID)),
  changeTrackLabel: (label: string) =>
    dispatch(changeTrackLabel(label, ownProps.trackID))
})

const TrackHeaderWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackHeader)

export default TrackHeaderWithConnect
