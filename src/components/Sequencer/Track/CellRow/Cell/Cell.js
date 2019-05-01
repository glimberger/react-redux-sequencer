// @flow strict
import * as React from "react"

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

class Cell extends React.Component<Props, State> {
  static defaultProps = {
    edited: false,
    gutter: 0
  }

  state = {
    hover: false
  }

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
    hover: boolean
  ): string {
    if (edited) {
      return hover ? Color.get100(color) : Color.get200(color)
    }

    if (played) {
      return hover ? Color.get100(color) : Color.getA100(color)
    }

    return hover ? Color.getA100(color) : Color.getA700(color)
  }

  render() {
    const css = {
      height: `${this.props.size}px`,
      width: `${Cell.cellWidth(
        this.props.noteResolution,
        this.props.size,
        this.props.gutter
      )}px`,
      backgroundColor: this.props.scheduled
        ? this.state.hover
          ? Color.getA400(this.props.color)
          : Color.getA700(this.props.color)
        : "transparent",
      border: `solid 3px ${Cell.borderColor(
        this.props.color,
        this.props.edited,
        this.props.played,
        this.state.hover
      )}`,
      borderRadius: "3px",
      cursor: "pointer",
      marginRight: `${this.props.gutter}px`
    }

    return (
      <div
        style={css}
        onClick={this.props.onClick}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        {" "}
      </div>
    )
  }
}

export default Cell
