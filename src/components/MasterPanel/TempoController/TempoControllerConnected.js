// @flow strict
import { connect } from "react-redux"

import TempoController from "./TempoController"
import { changeTempo } from "../../../redux/actions/session/creators"

import type { Action } from "../../../redux/actions/session/types"
import type { Dispatch } from "redux"

const mapStateToProps = state => ({ tempo: state.session.tempo })

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onChange(value: number) {
      dispatch(changeTempo(parseFloat(value)))
    }
  }
}

const TempoControllerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TempoController)

export default TempoControllerConnected
