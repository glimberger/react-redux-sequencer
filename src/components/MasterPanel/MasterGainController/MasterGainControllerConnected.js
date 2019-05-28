// @flow strict
import { connect } from "react-redux"

import { changeMasterGain } from "../../../redux/actions/session/creators"
import MasterGainController from "./MasterGainController"
import type { Props, OwnProps } from "./MasterGainController"

const mapStateToProps = state => ({ gain: state.session.masterGain })

const MasterGainControllerConnected = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { changeMasterGain }
)(MasterGainController)

export default MasterGainControllerConnected
