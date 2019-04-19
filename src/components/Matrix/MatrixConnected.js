// @flow strict
import { connect } from "react-redux"

import Matrix from "./Matrix"
import {
  toggleMuteTrack,
  toggleSoloTrack,
  toggleTrackPanel,
  toggleCellPanel
} from "../../redux/actions/audio/creators"
import {
  changeNoteResolution,
  changeTrackGain,
  scheduleTrackCell
} from "../../redux/actions/session/creators"

import type { AudioState } from "../../redux/store/audio/types"
import type { Session } from "../../redux/store/session/types"

const mapStateToProps = (state: { audio: AudioState, session: Session }) => {
  return {
    currentBeat: state.audio.currentBeat,
    currentTrackPanel: state.audio.currentTrackPanel,
    currentCellPanel: state.audio.currentCellPanel,
    mode: state.audio.mode,
    mutes: state.audio.mutes,
    solos: state.audio.solos,
    tracks: state.session.tracks,
    audioState: state.audio,
    sessionState: state.session
  }
}

const MatrixConnected = connect(
  mapStateToProps,
  {
    onToggleCellPanel: toggleCellPanel,
    onMuteClick: toggleMuteTrack,
    onSoloClick: toggleSoloTrack,
    onTrackClick: toggleTrackPanel,
    onToggleScheduleCell: scheduleTrackCell,
    onGainChange: changeTrackGain,
    onNoteResolutionChange: changeNoteResolution
  }
)(Matrix)

export default MatrixConnected
