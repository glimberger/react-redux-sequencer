// @flow strict
import * as React from "react"

import Color from "../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type PropsType = {
  mode: string,
  color: MaterialColor,
  setPlayMode: () => void,
  setEditMode: () => void
}

class ModeSwitch extends React.Component<PropsType> {
  handleKeyUp = (e: SyntheticKeyboardEvent<EventTarget>) => {
    const code = e.which

    // 'e'
    if (code === 69) {
      this.props.setEditMode()
    }

    // 'p'
    if (code === 80) {
      this.props.setPlayMode()
    }
  }

  componentDidMount(): void {
    window.addEventListener("keyup", this.handleKeyUp)
  }

  componentWillUnmount(): void {
    window.removeEventListener("keyup", this.handleKeyUp)
  }

  render() {
    let { mode, color, setPlayMode, setEditMode } = this.props
    const containerStyles = {
      height: "2.5rem",
      width: "6rem",
      display: "flex",
      color: Color.get100(color),
      border: `solid 3px ${Color.get100(color)}`,
      borderRadius: "3px",
      cursor: "pointer"
    }

    const textStyles = {
      margin: "auto",
      fontWeight: "700",
      userSelect: "none"
    }

    return (
      <div
        style={containerStyles}
        onClick={() => {
          if (mode === "PLAY") {
            setEditMode()
          }
          if (mode === "EDIT") {
            setPlayMode()
          }
        }}
      >
        <span style={textStyles}>{mode}</span>
      </div>
    )
  }
}

export default ModeSwitch
