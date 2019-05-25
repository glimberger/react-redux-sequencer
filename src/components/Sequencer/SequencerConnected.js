// @flow strict
import { connect } from "react-redux"

import Sequencer from "./Sequencer"

const mapStateToProps = state => ({
  trackOrder: state.session.trackOrder
})

const SequencerConnected = connect(mapStateToProps)(Sequencer)

export default SequencerConnected
