// @flow strict
import { connect } from "react-redux"

import Matrix from "./Matrix"
import { getOrderedTracks } from "../../redux/reducers"

const mapStateToProps = state => ({
  orderedTracks: getOrderedTracks(state)
})

const MatrixConnected = connect(mapStateToProps)(Matrix)

export default MatrixConnected
