// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

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

const Container = styled.div`
  cursor: pointer;
`

const StyledTrackHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ gutter }) => gutter}px;
  border-radius: 3px;
  background-color: ${({ color, hover }) =>
    hover ? Color.get600(color) : Color.get800(color)};
  color: ${({ color }) => Color.get100(color)};
`

const StyledControls = styled.div`
  display: flex;
`

const GainIndicator = styled.div`
  user-select: none;
  margin-left: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  font-size: 13px;
`

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
    return (
      <Container
        title="Open/close track panel"
        onClick={() => this.props.onTitleClick()}
      >
        <StyledTrackHeader
          width={this.props.width}
          height={this.props.height}
          gutter={this.props.gutter}
          color={this.props.color}
          hover={this.state.hover}
          onMouseEnter={() => this.hoverOn()}
          onMouseLeave={() => this.hoverOff()}
        >
          <TrackLabel
            label={this.props.label}
            color={this.props.color}
            hover={this.state.hover}
          />
          <StyledControls>
            <GainIndicator>{Volume.toDBString(this.props.gain)}</GainIndicator>
            <SoloButton
              color={this.props.color}
              width={this.props.height - 2 * this.props.gutter}
              soloed={this.props.soloed}
              onClick={() => this.props.onSoloClick()}
            />
            <MuteButton
              color={this.props.color}
              width={this.props.height - 2 * this.props.gutter}
              muted={this.props.muted}
              onClick={() => this.props.onMuteClick()}
            />
          </StyledControls>
        </StyledTrackHeader>
      </Container>
    )
  }
}

export default TrackHeader
