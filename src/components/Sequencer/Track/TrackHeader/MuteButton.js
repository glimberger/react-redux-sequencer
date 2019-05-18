// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  width: number,
  muted: boolean,
  onClick: () => void
}

const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: ${({ color, muted }) =>
    muted ? Color.get50(color) : Color.get400(color)};
  text-align: center;
  line-height: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ color, muted }) =>
    muted ? Color.get900(color) : Color.get800(color)};

  &:hover {
    background-color: ${({ color, muted }) =>
      muted ? "white" : Color.get300(color)};
  }
`

const buttonRef = React.createRef<HTMLButtonElement>()

const MuteButton = React.memo<Props>(function MuteButton(props: Props) {
  const handleClick = () => {
    props.onClick()
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <StyledButton
      color={props.color}
      width={props.width}
      muted={props.muted}
      ref={buttonRef}
      onClick={event => {
        event.stopPropagation()
        handleClick()
      }}
    >
      M
    </StyledButton>
  )
})

export default MuteButton
