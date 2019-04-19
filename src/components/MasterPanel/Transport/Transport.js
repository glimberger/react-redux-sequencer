// @flow strict
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./Transport.module.css"
import type { AudioState } from "../../../redux/store/audio/types"

type PropsType = {
  mode: $PropertyType<AudioState, "mode">,
  playing: $PropertyType<AudioState, "playing">
}

type DispatchProps = {
  togglePlay: () => void
}

class Transport extends React.Component<PropsType & DispatchProps> {
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
    if (this.props.playing) {
      return (
        <button
          className={styles.Base}
          onClick={this.handlePlayClick}
          ref={this.playButtonRef}
        >
          <FontAwesomeIcon icon="pause" />
        </button>
      )
    }
    return (
      <button
        className={styles.Base}
        onClick={this.handlePauseClick}
        ref={this.pauseButtonRef}
      >
        <FontAwesomeIcon icon="play" />
      </button>
    )
  }
}

export default Transport
