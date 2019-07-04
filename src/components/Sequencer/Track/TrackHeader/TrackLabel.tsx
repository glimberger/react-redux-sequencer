import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Color, { MaterialColor } from "../../../../utils/color/colorLibrary"

interface IProps {
  label: string
  color: MaterialColor
}

const StyledLabel = styled.div<{ color: MaterialColor }>`
  flex: 1;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 0;
  color: ${({ color }) => Color.get100(color)};

  &:hover {
    color: ${({ color }) => Color.get50(color)};
  }
`

function TrackLabel(props: IProps) {
  return <StyledLabel color={props.color}>{props.label}</StyledLabel>
}

export default TrackLabel
