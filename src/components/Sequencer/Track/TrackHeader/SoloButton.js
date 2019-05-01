// @flow strict
import * as React from "react"

import Color from "../../../../utils/color/colorLibrary"
import styles from "./TrackHeader.module.css"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type Props = {
  color: MaterialColor,
  width: string,
  soloed: boolean,
  onClick: () => void
}

type State = {
  hover: boolean
}

class SoloButton extends React.Component<Props, State> {
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
    const { soloed, onClick, width, color } = this.props

    const cssStyles = {
      width: width,
      backgroundColor: soloed
        ? this.state.hover
          ? "white"
          : Color.get50(color)
        : this.state.hover
        ? Color.get300(color)
        : Color.get400(color),
      color: soloed ? Color.get900(color) : Color.get800(color)
    }

    return (
      <div
        className={styles.Button}
        style={cssStyles}
        role="button"
        title="Toggle track solo"
        onClick={onClick}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        S
      </div>
    )
  }
}

export default SoloButton
