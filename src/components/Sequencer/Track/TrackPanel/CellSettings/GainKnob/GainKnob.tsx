import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Knob from "../../../../../controllers/Knob/Knob"
import Volume from "../../../../../../audio/utils/Volume/Volume"
import { MaterialColor } from "../../../../../../utils/color/colorLibrary"

interface IProps {
  // ownProps
  color: MaterialColor
  gutter: number
  size: number
  // stateProps
  gain: number
  onChange: (value: number) => void
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledKnob = styled.div<{ size: number }>`
  height: ${({ size }) => size}px;
`

const GainIndicator = styled.div<{ gutter: number }>`
  user-select: none;
  margin-top: ${({ gutter }) => gutter * 2}px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  font-size: 13px;
`

function GainKnob(props: IProps) {
  const knobPrefs = { color: props.color, size: props.size }

  return (
    <StyledWrapper>
      <StyledKnob size={props.size}>
        <Knob
          value={props.gain}
          onChange={props.onChange}
          min={0}
          max={2 / Math.sqrt(2)}
          step={0.01}
          prefs={knobPrefs}
        />
      </StyledKnob>
      <GainIndicator gutter={props.gutter}>
        {Volume.toDBString(props.gain)}
      </GainIndicator>
    </StyledWrapper>
  )
}

export default GainKnob
