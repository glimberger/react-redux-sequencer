// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  width: number,
  soloed: boolean,
  onClick: () => void
}

type State = {
  hover: boolean
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
  background-color: ${({ color, soloed, hover }) =>
    soloed
      ? hover
        ? "white"
        : Color.get50(color)
      : hover
      ? Color.get300(color)
      : Color.get400(color)};
  text-align: center;
  line-height: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ color, soloed }) =>
    soloed ? Color.get900(color) : Color.get800(color)};
`

class SoloButton extends React.Component<Props, State> {
  state = {
    hover: false
  }

  buttonRef = React.createRef<HTMLButtonElement>()

  hoverOn() {
    this.setState({ hover: true })
  }
  hoverOff() {
    this.setState({ hover: false })
  }

  handleClick() {
    this.props.onClick()
    if (this.buttonRef.current) {
      this.buttonRef.current.blur()
    }
  }
  render() {
    return (
      <StyledButton
        color={this.props.color}
        width={this.props.width}
        soloed={this.props.soloed}
        hover={this.state.hover}
        ref={this.buttonRef}
        onClick={event => {
          event.stopPropagation()
          this.handleClick()
        }}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        S
      </StyledButton>
    )
  }
}

export default SoloButton
