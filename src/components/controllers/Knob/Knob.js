// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import { coordinates } from "../../../utils/trigo/polar"
import Color from "../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type Props = {
  value: number,
  onChange: (value: number) => void,
  min: number,
  max: number,
  step: number,
  prefs: { color: MaterialColor, size: number }
}

const StyledKnob = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

const StyledSvg = styled.svg`
  pointer-events: none;
  width: 100%;
  height: 100%;
`

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  cursor: grab;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  opacity: 0;
`

function Knob({ value, min, max, step, prefs, onChange }: Props) {
  const angle = (360 / (1.0 * (max - min))) * (parseFloat(value) - min)

  const { x, y } = coordinates(35, 35, 35)(angle)
  return (
    <StyledKnob width={prefs.size} height={prefs.size}>
      <StyledSvg
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#333842" />
        <path
          fill={Color.getA100(prefs.color)}
          d={`M35 35L35 70A35 35 0 ${angle < 180 ? 0 : 1} 1 ${x} ${y}L35 35`}
        />
        <g
          style={{
            transform: "rotate(" + angle + "deg)",
            transformOrigin: "center center"
          }}
        >
          <circle cx="35" cy="35" r="29" fill="#21252B" />
          <circle cx="35" cy="56" r="4" fill={Color.getA100(prefs.color)} />
        </g>
      </StyledSvg>
      <StyledInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e: SyntheticInputEvent<HTMLInputElement>) => {
          const { value } = e.currentTarget

          onChange(parseFloat(value))
        }}
      />
    </StyledKnob>
  )
}

export default Knob
