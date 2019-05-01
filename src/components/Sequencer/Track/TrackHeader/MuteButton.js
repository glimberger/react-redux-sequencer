// @flow strict
import * as React from "react"

import styles from "./TrackHeader.module.css"
import Color from "../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  width: string,
  muted: boolean,
  onClick: () => void
}

type State = {
  hover: boolean
}

class MuteButton extends React.Component<Props, State> {
  state = {
    hover: false
  }

  hoverOn() {
    this.setState({ hover: true })
  }
  hoverOff() {
    this.setState({ hover: false })
  }

  render() {
    const { muted, onClick, width, color } = this.props

    const cssStyles = {
      width: width,
      backgroundColor: muted
        ? this.state.hover
          ? "white"
          : Color.get50(color)
        : this.state.hover
        ? Color.get300(color)
        : Color.get400(color),
      color: muted ? Color.get900(color) : Color.get800(color)
    }

    return (
      <div
        className={styles.Button}
        style={cssStyles}
        role="button"
        title="Toggle track mute"
        onClick={onClick}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        M
      </div>
    )
  }
}

export default MuteButton
