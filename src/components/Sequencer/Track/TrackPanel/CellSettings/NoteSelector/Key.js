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

type State = {
  hover: boolean
}

const KeyStyled = styled.button`
  display: inline-block;
  height: 100%;
  width: ${({ width }) => width}px;
  background-color: ${({ color, black, active, hover }) =>
    Key.backgroundColor(color, black, active, hover)};
  padding: 0;
  border: 1px solid
    ${props =>
      props.black ? Color.get900(props.color) : Color.get200(props.color)};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: ${props => (props.active ? "default" : "pointer")};
`

class Key extends React.Component<Props, State> {
  state = {
    hover: false
  }

  hoverOn() {
    this.setState({ hover: true })
    this.props.onHoverStart()
  }
  hoverOff() {
    this.setState({ hover: false })
    this.props.onHoverStop()
  }

  static backgroundColor(
    color: MaterialColor,
    black: boolean,
    active: boolean,
    hover: boolean
  ) {
    if (active) {
      return black ? Color.get800(color) : "white"
    }

    if (black && !active) {
      return hover ? Color.get800(color) : Color.get900Dark(color)
    }

    if (!black && !active) {
      return hover ? "white" : Color.get100(color)
    }
  }

  render() {
    return (
      <KeyStyled
        width={this.props.width}
        color={this.props.color}
        black={this.props.black}
        midinote={this.props.midiNote}
        active={this.props.active}
        onClick={this.props.onClick}
        onMouseEnter={() => {
          this.hoverOn()
        }}
        onMouseLeave={() => {
          this.hoverOff()
        }}
      >
        {" "}
      </KeyStyled>
    )
  }
}

export default Key