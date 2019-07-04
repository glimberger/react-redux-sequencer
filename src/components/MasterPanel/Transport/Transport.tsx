
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import { togglePlay } from "../../../redux/actions/audio/creators"
import  Color, { MaterialColor } from "../../../utils/color/colorLibrary"
import  { IAppState } from "../../../redux/store/configureStore"

interface IOwnProps  {
  color: MaterialColor
}

interface IProps extends IOwnProps {
  playing: boolean,
  togglePlay: () => void
}

const StyledButton = styled.button<{color: MaterialColor}>`
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

export function Transport(props: IProps) {
  const playButtonRef = React.useRef<HTMLButtonElement | null>(null)
  const pauseButtonRef = React.useRef<HTMLButtonElement | null>(null)

  const handlePlayClick = () => {
      // tslint:disable-next-line:no-unused-expression
    playButtonRef.current && playButtonRef.current.blur()
    props.togglePlay()
  }

  const handlePauseClick = () => {
      // tslint:disable-next-line:no-unused-expression
    pauseButtonRef.current && pauseButtonRef.current.blur()
    props.togglePlay()
  }

  const handleKeyUp = (e: KeyboardEvent) => {
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

const mapStateToProps = (state: IAppState) => ({
  playing: state.audio.playing
})

const ConnectedTransport = connect(
  mapStateToProps,
  { togglePlay }
)(Transport)

export default ConnectedTransport
