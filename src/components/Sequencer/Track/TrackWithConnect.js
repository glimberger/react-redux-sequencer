// @flow strict
import { connect } from "react-redux"

import Track from "./Track"

const mapStateToProps = state => {
  return {
    activeTrackID: state.session.activeTrackID
  }
}

const TrackWithConnect = connect(mapStateToProps)(Track)

export default TrackWithConnect
