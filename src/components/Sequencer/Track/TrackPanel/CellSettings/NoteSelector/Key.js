// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../../../utils/color/colorLibrary"

type Props = {
  width: number,
  color: MaterialColor,
  black: boolean,
  midiNote: number,
  active: boolean,
  onClick: () => void,
  onHoverStart: () => void,
  onHoverStop: () => void
}

const backgroundColor = (
  color: MaterialColor,
  black: boolean,
  active: boolean,
  hover: boolean
) => {
  if (active) {
    return black ? Color.get800(color) : "white"
  }

  if (black) {
    return hover ? Color.get800(color) : Color.get900Dark(color)
  }

  return hover ? "white" : Color.get100(color)
}

const KeyStyled = styled.button`
  display: inline-block;
  height: 100%;
  width: ${({ width }) => width}px;
  background-color: ${({ color, black, active }) =>
    backgroundColor(color, black, active, false)};
  padding: 0;
  border: 1px solid
    ${props =>
      props.black ? Color.get900(props.color) : Color.get200(props.color)};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: ${props => (props.active ? "default" : "pointer")};

  &:hover {
    background-color: ${({ color, black, active }) =>
      backgroundColor(color, black, active, true)};
  }
`

const Key = React.memo<Props>(function Key(props: Props) {
  const buttonRef = React.createRef<HTMLButtonElement>()

  const handleClick = () => {
    props.onClick()
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <KeyStyled
      width={props.width}
      color={props.color}
      black={props.black}
      midinote={props.midiNote}
      active={props.active}
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => props.onHoverStart()}
      onMouseLeave={() => props.onHoverStop()}
    >
      {" "}
    </KeyStyled>
  )
})

export default Key
