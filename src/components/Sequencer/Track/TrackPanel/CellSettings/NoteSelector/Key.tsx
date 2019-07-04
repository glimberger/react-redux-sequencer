import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Color, {
  MaterialColor
} from "../../../../../../utils/color/colorLibrary"

interface IProps {
  width: number
  color: MaterialColor
  black: boolean
  midiNote: number
  active: boolean
  disabled: boolean
  onClick: () => void
  onHoverStart: () => void
  onHoverStop: () => void
}

const backgroundColor = (
  color: MaterialColor,
  black: boolean,
  active: boolean,
  hover: boolean,
  disabled: boolean
) => {
  if (disabled) {
    return black ? Color.get900Dark(Color.GREY) : Color.get700(Color.GREY)
  }

  if (active) {
    return black ? Color.get800(color) : "white"
  }

  if (black) {
    return hover ? Color.get800(color) : Color.get900Dark(color)
  }

  return hover ? "white" : Color.get100(color)
}

const border = (color: MaterialColor, disabled: boolean, black: boolean) => {
  if (disabled) {
    return Color.get800(Color.GREY)
  }

  return black ? Color.get900(color) : Color.get200(color)
}

const KeyStyled = styled.button<{
  width: number
  black: boolean
  active: boolean
  disabled: boolean
  color: MaterialColor
}>`
  display: inline-block;
  height: 100%;
  width: ${({ width }) => width}px;
  background-color: ${({ color, black, active, disabled }) =>
    backgroundColor(color, black, active, false, disabled)};
  padding: 0;
  border: 1px solid ${props => border(props.color, props.disabled, props.black)};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ color, black, active, disabled }) =>
      backgroundColor(color, black, active, true, disabled)};
  }
`

const KeyMemo = React.memo(function Key(props: IProps) {
  const buttonRef = React.createRef<HTMLButtonElement>()

  const handleClick = () => {
    props.onClick()
    // tslint:disable-next-line:no-unused-expression
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <KeyStyled
      disabled={props.disabled}
      width={props.width}
      color={props.color}
      black={props.black}
      active={props.active}
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => !props.disabled && props.onHoverStart()}
      onMouseLeave={() => !props.disabled && props.onHoverStop()}
    >
      {" "}
    </KeyStyled>
  )
})

export default KeyMemo
