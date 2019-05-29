// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Controller from "../../controllers/Fader/Fader"
import Volume from "../../../audio/utils/Volume/Volume"

import type { MaterialColor } from "../../../utils/color/colorLibrary"
import Color from "../../../utils/color/colorLibrary"
import { connect } from "react-redux"
import { changeMasterGain } from "../../../redux/actions/session/creators"

export type OwnProps = {|
  color: MaterialColor
|}

export type Props = {
  ...OwnProps,
  gain: number,
  changeMasterGain: (gain: number) => void
}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const StyledIndicator = styled.span`
  margin-left: 0.5rem;
  width: 4rem;
  text-align: end;
  user-select: none;
  color: ${({ color }) => Color.get50(color)};
`

export function MasterGainController({ changeMasterGain, gain, color }: Props) {
  const handleGainChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    changeMasterGain(parseFloat(e.target.value))
  }

  return (
    <StyledContainer>
      <Controller
        orientation="horizontal"
        color={color}
        size={140}
        value={gain}
        onChange={handleGainChange}
        max={1}
        min={0}
        step={0.001}
      />
      <StyledIndicator color={color}>{Volume.toDBString(gain)}</StyledIndicator>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({ gain: state.session.masterGain })

const MasterGainControllerConnected = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { changeMasterGain }
)(MasterGainController)

export default MasterGainControllerConnected
