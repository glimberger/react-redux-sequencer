// @flow strict
import { connect } from "react-redux"

import Sequencer from "./Sequencer"
import { getOrderedTracks } from "../../redux/reducers"

const mapStateToProps = state => ({
  orderedTracks: getOrderedTracks(state)
})

const SequencerConnected = connect(mapStateToProps)(Sequencer)

export default SequencerConnected
