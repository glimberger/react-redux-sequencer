// @flow strict
import { connect } from "react-redux"

import { changeMasterGain } from "../../../redux/actions/session/creators"
import MasterGainController from "./MasterGainController"

import type { Session } from "../../../redux/store/session/types"

const mapStateToProps = (state: { session: Session }) => {
  return { gain: state.session.masterGain }
}

const MasterGainControllerConnected = connect(
  mapStateToProps,
  { changeMasterGain }
)(MasterGainController)

export default MasterGainControllerConnected
