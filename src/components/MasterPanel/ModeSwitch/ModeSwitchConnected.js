// @flow strict
import { connect } from "react-redux"

import ModeSwitch from "./ModeSwitch"

import type { AudioState } from "../../../redux/store/audio/types"
import { setEditMode, setPlayMode } from "../../../redux/actions/audio/creators"

const mapStateToProps = (state: { audio: AudioState }) => {
  return { mode: state.audio.mode }
}

const ModeSwitchConnected = connect(
  mapStateToProps,
  { setPlayMode, setEditMode }
)(ModeSwitch)

export default ModeSwitchConnected
