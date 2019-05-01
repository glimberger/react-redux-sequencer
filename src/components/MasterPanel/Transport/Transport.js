// @flow strict
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./Transport.module.css"
import Color from "../../../utils/color/colorLibrary"

import type { AudioState } from "../../../redux/store/audio/types"
import type { MaterialColor } from "../../../utils/color/colorLibrary"

type OwnProps = {
  color: MaterialColor
}

type StateProps = {
  playing: $PropertyType<AudioState, "playing">
}

type DispatchProps = {
  togglePlay: () => void
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  hover: boolean
}

class Transport extends React.Component<Props, State> {
  state = {
    hover: false
  }

  hoverOn() {
    this.setState({ hover: true })
  }
  hoverOff() {
    this.setState({ hover: false })
  }

  playButtonRef: {
    current: HTMLButtonElement | null
  } = React.createRef<HTMLButtonElement>()
  pauseButtonRef: {
    current: HTMLButtonElement | null
  } = React.createRef<HTMLButtonElement>()

  handlePlayClick = () => {
    if (this.playButtonRef.current) {
      this.playButtonRef.current.blur()
    }

    this.props.togglePlay()
  }

  handlePauseClick = () => {
    if (this.pauseButtonRef.current) {
      this.pauseButtonRef.current.blur()
    }

    this.props.togglePlay()
  }

  handleKeyUp = (e: SyntheticKeyboardEvent<EventTarget>) => {
    const code = e.which

    // place
    if (code === 32) {
      this.props.togglePlay()
    }
  }

  componentDidMount(): void {
    window.addEventListener("keyup", this.handleKeyUp)
  }

  componentWillUnmount(): void {
    window.removeEventListener("keyup", this.handleKeyUp)
  }

  render() {
    const css = {
      Base: {
        backgroundColor: this.state.hover
          ? Color.get700(this.props.color)
          : Color.get800(this.props.color),
        color: Color.get50(this.props.color)
      }
    }
    if (this.props.playing) {
      return (
        <button
          style={css.Base}
          className={styles.Base}
          ref={this.playButtonRef}
          onClick={this.handlePlayClick}
          onMouseEnter={() => this.hoverOn()}
          onMouseLeave={() => this.hoverOff()}
        >
          <FontAwesomeIcon icon="pause" />
        </button>
      )
    }

    return (
      <button
        style={css.Base}
        className={styles.Base}
        ref={this.pauseButtonRef}
        onClick={this.handlePauseClick}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        <FontAwesomeIcon icon="play" />
      </button>
    )
  }
}

export default Transport
