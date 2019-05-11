// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../utils/color/colorLibrary"

import type { NoteResolution } from "../../../../../redux/store/session/types"
import type { MaterialColor } from "../../../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  size: number,
  gutter: number,
  noteResolution: NoteResolution,
  played: boolean,
  scheduled: boolean,
  edited: boolean,
  onClick: () => void
}

type State = {
  hover: boolean
}

const StyledCell = styled.button`
  cursor: pointer;
  height: ${({ size }) => size}px;
  width: ${({ noteResolution, size, gutter }) =>
    Cell.cellWidth(noteResolution, size, gutter)}px;
  margin-right: ${({ gutter }) => gutter}px;
  padding: 0;
  border: 3px solid
    ${({ color, edited, played, scheduled, hover }) =>
      Cell.borderColor(color, edited, played, scheduled, hover)};
  border-radius: 3px;
  background-color: ${({ scheduled, hover, color }) =>
    scheduled
      ? hover
        ? Color.getA400(color)
        : Color.getA700(color)
      : "transparent"};
`

class Cell extends React.Component<Props, State> {
  static defaultProps = {
    edited: false,
    gutter: 0
  }

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

  static cellWidth(
    resolution: NoteResolution,
    size: number,
    margin: number
  ): number {
    if (resolution === 1) {
      return (size + margin) / 2.0 - margin
    }
    if (resolution === 2) {
      return size
    }
    if (resolution === 4) {
      return (size + margin) * 2.0 - margin
    }

    return size
  }

  static borderColor(
    color: MaterialColor,
    edited: boolean,
    played: boolean,
    scheduled: boolean,
    hover: boolean
  ): string {
    if (edited) {
      return hover ? Color.get50(color) : Color.get100(color)
    }

    if (played) {
      return hover ? Color.get100(color) : Color.getA100(color)
    }

    if (scheduled) {
      return hover ? Color.getA100(color) : Color.getA700(color)
    }

    return hover ? Color.getA100(color) : Color.get900(color)
  }

  handleClick() {
    this.props.onClick()
    this.buttonRef.current && this.buttonRef.current.blur()
  }

  render() {
    return (
      <StyledCell
        color={this.props.color}
        size={this.props.size}
        gutter={this.props.gutter}
        noteResolution={this.props.noteResolution}
        played={this.props.played}
        scheduled={this.props.scheduled}
        edited={this.props.edited}
        hover={this.state.hover}
        ref={this.buttonRef}
        onClick={() => this.handleClick()}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        {" "}
      </StyledCell>
    )
  }
}

export default Cell
