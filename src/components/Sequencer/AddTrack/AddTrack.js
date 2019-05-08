// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  width: number,
  height: number,
  gutter: number
}

const Container = styled.div`
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

const Plus = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
  font-size: 22px;
  font-weight: bold;
`

function AddTrack(props: Props) {
  return (
    <Container {...props}>
      <Plus {...props}>+</Plus>
    </Container>
  )
}

export default AddTrack
