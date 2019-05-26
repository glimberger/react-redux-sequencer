// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../utils/color/colorLibrary"
import { usePrefs } from "../../context/sequencer-prefs"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  onClick: () => void
}

const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ color }) => Color.get800(color)};
  border-radius: 3px;
  color: ${({ color }) => Color.get500(color)};

  &:hover {
    background: ${({ color }) => Color.get700(color)};
    color: ${({ color }) => Color.get100(color)};
  }
`

const StyledButtonLabel = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
  font-size: 16px;
`

function AddTrackButton({ color, onClick }: Props) {
  const { panelWidth, cellSize, gutter } = usePrefs()

  return (
    <StyledButton
      height={cellSize}
      width={panelWidth}
      color={color}
      onClick={onClick}
    >
      <StyledButtonLabel gutter={gutter}>Add...</StyledButtonLabel>
    </StyledButton>
  )
}

export default AddTrackButton
