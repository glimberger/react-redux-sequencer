// @flow strict
import { connect } from "react-redux"
import TrackSettings from "./TrackSettings"
import { getActiveTrack } from "../../../../../redux/reducers"

const mapStateToProps = state => {
  const track = getActiveTrack(state)

  return {
    color: track ? track.color : "grey",
    isTrackActive: !!track
  }
}

const TrackSettingsWithConnect = connect(mapStateToProps)(TrackSettings)

export default TrackSettingsWithConnect
