// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  label: string,
  color: MaterialColor
}

const StyledLabel = styled.div`
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

function TrackLabel(props: Props) {
  return <StyledLabel color={props.color}>{props.label}</StyledLabel>
}

export default TrackLabel
