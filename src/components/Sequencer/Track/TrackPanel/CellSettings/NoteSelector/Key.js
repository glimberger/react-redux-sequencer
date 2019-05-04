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
  width: ${props => props.width}px;
  background-color: ${props =>
    Key.backgroundColor(props.color, props.black, props.active, props.hover)};
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
  }
  hoverOff() {
    this.setState({ hover: false })
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
        {...this.props}
        onClick={() => this.props.onClick()}
        onMouseEnter={() => {
          this.hoverOn()
          this.props.onHoverStart()
        }}
        onMouseLeave={() => {
          this.hoverOff()
          this.props.onHoverStop()
        }}
      >
        {" "}
      </KeyStyled>
    )
  }

  // render() {
  //   const css = {
  //     display: "inline-block",
  //     height: "100%",
  //     width: `${this.props.width}px`,
  //     backgroundColor: Key.backgroundColor(
  //       this.props.color,
  //       this.props.black,
  //       this.props.active,
  //       this.state.hover
  //     ),
  //     padding: 0,
  //     border: `1px solid ${
  //       this.props.black
  //         ? Color.get900(this.props.color)
  //         : Color.get200(this.props.color)
  //     }`,
  //     borderBottomLeftRadius: "3px",
  //     borderBottomRightRadius: "3px",
  //     cursor: this.props.active ? "default" : "pointer"
  //   }
  //
  //   return (
  //     <button
  //       style={css}
  //       onClick={() => this.props.onClick()}
  //       onMouseEnter={() => {
  //         this.hoverOn()
  //         this.props.onHoverStart()
  //       }}
  //       onMouseLeave={() => {
  //         this.hoverOff()
  //         this.props.onHoverStop()
  //       }}
  //     >
  //       {" "}
  //     </button>
  //   )
  // }
}

export default Key
