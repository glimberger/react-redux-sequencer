// @flow strict
import * as React from "react"

import styles from "./TrackHeader.module.css"
import Color from "../../../../utils/color/colorLibrary"
import Volume from "../../../../audio/utils/Volume/Volume"
import MuteButton from "./MuteButton"
import SoloButton from "./SoloButton"
import TrackLabel from "./TrackLabel"

import type { MaterialColor } from "../../../../utils/color/colorLibrary"

type StateProps = {
  color: MaterialColor,
  trackID: string,
  muted: boolean,
  soloed: boolean,
  gain: number
}

type DispatchProps = {
  onMuteClick: () => void,
  onSoloClick: () => void,
  onTitleClick: () => void
}

type OwnProps = {
  gutter: number,
  width: number,
  height: number,
  label: string
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  hover: boolean
}

class TrackHeader extends React.Component<Props, State> {
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
    const cssStyles = {
      height: this.props.height,
      width: this.props.width,
      padding: `${this.props.gutter}px`,
      backgroundColor: this.state.hover
        ? Color.get600(this.props.color)
        : Color.get800(this.props.color),
      color: Color.get100(this.props.color)
    }

    return (
      <div
        className={styles.Block}
        style={cssStyles}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        <TrackLabel
          label={this.props.label}
          color={this.props.color}
          onClick={() => this.props.onTitleClick()}
        />
        <div className={styles.Controls}>
          <div className={styles.GainIndicator}>
            {Volume.toDBString(this.props.gain)}
          </div>
          <SoloButton
            color={this.props.color}
            width={`calc(${this.props.height}px - 1rem)`}
            soloed={this.props.soloed}
            onClick={() => this.props.onSoloClick()}
          />
          <MuteButton
            color={this.props.color}
            width={`calc(${this.props.height}px - 1rem)`}
            muted={this.props.muted}
            onClick={() => this.props.onMuteClick()}
          />
        </div>
      </div>
    )
  }
}

export default TrackHeader
