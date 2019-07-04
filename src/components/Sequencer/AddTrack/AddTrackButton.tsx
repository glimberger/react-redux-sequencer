import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import { usePrefs } from "../../context/sequencer-prefs"
import Color, { MaterialColor } from "../../../utils/color/colorLibrary"

interface IProps {
  color: MaterialColor
  onClick: () => void
}

const StyledButton = styled.div<{
  width: number
  height: number
  color: MaterialColor
}>`
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

const StyledButtonLabel = styled.div<{ gutter: number }>`
  margin-left: ${({ gutter }) => gutter}px;
  font-size: 16px;
`

function AddTrackButton({ color, onClick }: IProps) {
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
