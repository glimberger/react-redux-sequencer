// @flow strict
import { connect } from "react-redux"

import { changeMasterGain } from "../../../redux/actions/session/creators"
import MasterGainController from "./MasterGainController"

const mapStateToProps = state => ({ gain: state.session.masterGain })

const MasterGainControllerConnected = connect(
  mapStateToProps,
  { changeMasterGain }
)(MasterGainController)

export default MasterGainControllerConnected
