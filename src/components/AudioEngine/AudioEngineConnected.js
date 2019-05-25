// @flow strict
import { connect } from "react-redux"
import {
  announceBeat,
  clearEventQueue,
  resetTransport,
  setAudioEngineReady,
  togglePlay
} from '../../redux/actions/audio/creators'
import { changeMasterGain, changeTrackGain } from '../../redux/actions/session/creators'
import { getMutes, getSolos, isSoloActive } from '../../redux/reducers'
import AudioEngine from './AudioEngine'

import type { AppState } from '../../redux/store/configureStore'

const mapStateToProps = (state: AppState) => ({
  ...state.session,
  ...state.audio,
  mutes: getMutes(state),
  solos: getSolos(state),
  isSoloActive: isSoloActive(state)
})

const AudioEngineConnected = connect(
  mapStateToProps,
  {
    announceBeat,
    clearEventQueue,
    resetTransport,
    togglePlay,
    setAudioEngineReady,
    changeMasterGain,
    changeTrackGain
  }
)(AudioEngine)

export default AudioEngineConnected
