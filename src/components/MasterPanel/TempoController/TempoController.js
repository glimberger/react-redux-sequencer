// @flow strict
import * as React from "react"
import { connect } from "react-redux"
// $FlowFixMe
import styled from "styled-components/macro"

import ValueController from "../../controllers/ValueController/ValueController"
import { changeTempo } from "../../../redux/actions/session/creators"

import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type { Dispatch } from "redux"
import type { Action } from "../../../redux/actions/session/types"

type OwnProps = {|
  color: MaterialColor
|}

type Props = {
  ...OwnProps,
  tempo: number,
  onChange: (value: number) => void
}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export function TempoController({ color, tempo, onChange }: Props) {
  return (
    <StyledContainer>
      <ValueController
        value={tempo}
        onChange={onChange}
        amount={2}
        min={20}
        max={200}
        prefs={{ color }}
      />
    </StyledContainer>
  )
}

const mapStateToProps = state => ({ tempo: state.session.tempo })

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onChange(value: number) {
      dispatch(changeTempo(parseFloat(value)))
    }
  }
}

const TempoControllerConnected = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps
)(TempoController)

export default TempoControllerConnected
