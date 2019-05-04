// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"
import Color from "../../../../utils/color/colorLibrary"

type Props = {
  label: string,
  color: MaterialColor,
  hover: boolean
}

const StyledLabel = styled.div`
  flex: 1;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 0;
  color: ${({ color, hover }) =>
    hover ? Color.get50(color) : Color.get100(color)};
`

function TrackLabel({ label, color, hover }: Props) {
  return (
    <StyledLabel color={color} hover={hover}>
      {label}
    </StyledLabel>
  )
}

export default TrackLabel
