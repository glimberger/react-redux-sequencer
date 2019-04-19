// @flow strict
import { connect } from "react-redux"

import { togglePlay } from "../../../redux/actions/audio/creators"
import Transport from "./Transport"

import type { AudioState } from "../../../redux/store/audio/types"

const mapStateToProps = (state: { audio: AudioState }) => {
  const { playing, mode } = state.audio

  return { playing, mode }
}

const ConnectedTransport = connect(
  mapStateToProps,
  { togglePlay }
)(Transport)

export default ConnectedTransport
