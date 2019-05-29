// @flow strict
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../utils/color/colorLibrary"
import { connect } from "react-redux"
import { togglePlay } from "../../../redux/actions/audio/creators"

import type { AudioState } from "../../../redux/store/audio/types"
import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type { AppState } from "../../../redux/store/configureStore"

type OwnProps = {|
  color: MaterialColor
|}

type Props = {
  ...OwnProps,
  playing: $PropertyType<AudioState, "playing">,
  togglePlay: () => void
}

const StyledButton = styled.button`
  height: 100%;
  width: 4rem;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  color: ${({ color }) => Color.get50(color)};
  background-color: ${({ color }) => Color.get800(color)};

  &:hover {
    background-color: ${({ color }) => Color.get700(color)};
  }
`

export function Transport(props: Props) {
  const playButtonRef = React.useRef<HTMLButtonElement | null>(null)
  const pauseButtonRef = React.useRef<HTMLButtonElement | null>(null)

  const handlePlayClick = () => {
    playButtonRef.current && playButtonRef.current.blur()
    props.togglePlay()
  }

  const handlePauseClick = () => {
    pauseButtonRef.current && pauseButtonRef.current.blur()
    props.togglePlay()
  }

  const handleKeyUp = (e: SyntheticKeyboardEvent<EventTarget>) => {
    const code = e.which

    // place
    if (code === 32) {
      props.togglePlay()
    }
  }

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)

    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [])

  return props.playing ? (
    <StyledButton
      color={props.color}
      ref={playButtonRef}
      onClick={handlePlayClick}
    >
      <FontAwesomeIcon icon="pause" />
    </StyledButton>
  ) : (
    <StyledButton
      color={props.color}
      ref={pauseButtonRef}
      onClick={handlePauseClick}
    >
      <FontAwesomeIcon icon="play" />
    </StyledButton>
  )
}

const mapStateToProps = (state: AppState) => ({
  playing: state.audio.playing
})

const ConnectedTransport = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { togglePlay }
)(Transport)

export default ConnectedTransport
