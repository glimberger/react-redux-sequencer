// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Controller from "../../../../../controllers/Fader/Fader"

import type {
  GainProcessing,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import Volume from "../../../../../../audio/utils/Volume/Volume"
import Color from "../../../../../../utils/color/colorLibrary"

type OwnProps = {
  size: number,
  gutter: number,
  onGainChange: (gain: number) => void
}
type StateProps = {
  color: $PropertyType<Track, "color">,
  gain: $PropertyType<GainProcessing, "gain">,
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type DispatchProps = {
  changeTrackGain: (trackId: string, gain: number) => void
}

type Props = OwnProps & StateProps & DispatchProps

const StyledGainController = styled.div`
  height: ${({ size }) => size}px;
  padding: ${({ gutter }) => gutter}px;
`

const GainIndicator = styled.div`
  user-select: none;
  text-align: center;
  color: ${({ color }) => Color.get100(color)};
  font-size: 11px;
`

function GainController({
  color,
  size,
  gutter,
  gain,
  activeTrackID,
  changeTrackGain
}: Props) {
  if (!activeTrackID) return <div />

  const handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    changeTrackGain(activeTrackID, parseFloat(value))
  }

  return (
    <div>
      <StyledGainController size={size} gutter={gutter}>
        <Controller
          orientation="vertical"
          color={color}
          size={size - 4 * gutter}
          value={gain}
          onChange={handleChange}
          max={1}
          min={0}
          step={0.001}
        />
      </StyledGainController>
      <GainIndicator color={color}>{Volume.toDBString(gain)}</GainIndicator>
    </div>
  )
}

export default GainController
