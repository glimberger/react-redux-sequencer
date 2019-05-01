// @flow strict
import * as React from "react"

import styles from "./TrackHeader.module.css"
import Color from "../../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  label: string,
  color: MaterialColor,
  onClick: () => void
}

type State = {
  hover: boolean
}

class TrackLabel extends React.Component<Props, State> {
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
    let { label, color, onClick } = this.props
    const cssStyles = {
      color: this.state.hover ? Color.get50(color) : Color.get100(color)
    }

    return (
      <div
        className={styles.Label}
        style={cssStyles}
        title="Open/close the track panel"
        onClick={onClick}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        {label}
      </div>
    )
  }
}

export default TrackLabel
