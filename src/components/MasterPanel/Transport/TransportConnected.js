// @flow strict
import { connect } from "react-redux"

import { togglePlay } from "../../../redux/actions/audio/creators"
import Transport from "./Transport"

const mapStateToProps = state => ({
  playing: state.audio.playing
})

const ConnectedTransport = connect(
  mapStateToProps,
  { togglePlay }
)(Transport)

export default ConnectedTransport
