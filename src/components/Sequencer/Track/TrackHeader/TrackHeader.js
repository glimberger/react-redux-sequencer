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
  onTitleClick: () => void,
  changeTrackLabel: (label: string) => void
}

type OwnProps = {
  gutter: number,
  width: number,
  height: number,
  label: string
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  labelEdited: boolean
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
  background-color: ${({ color }) => Color.get800(color)};
  color: ${({ color }) => Color.get100(color)};

  &:hover {
    background-color: ${({ color }) => Color.get600(color)};
    color: ${({ color }) => Color.get50(color)};
  }
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

const StyledLabelForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  & input {
    padding: ${({ gutter }) => gutter}px;
    border: 1px solid ${({ color }) => Color.get300(color)};
    border-radius: 3px;
    background-color: ${({ color }) => Color.get400(color)};
    color: ${({ color }) => Color.get900(color)};
    font-size: 13px;
    line-height: 0;
  }
`

class TrackHeader extends React.Component<Props, State> {
  state = {
    labelEdited: false
  }

  handleClick = () => {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        if (!this.state.labelEdited) {
          this.props.onTitleClick()
        }
      }
      this.prevent = false
    }, this.delay)
  }

  handleDoubleClick = () => {
    clearTimeout(this.timer)
    this.prevent = true
    this.setState({ labelEdited: true })
  }

  handleSubmit = (event: SyntheticInputEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const submittedLabel = formData.get("label")

    if (typeof submittedLabel === "string") {
      this.props.changeTrackLabel(submittedLabel)
      this.setState({ labelEdited: false })
    }
  }

  // https://css-tricks.com/snippets/javascript/bind-different-events-to-click-and-double-click/
  timer: TimeoutID
  delay = 200
  prevent: boolean = false

  render() {
    return (
      <Container
        title="Open/close track panel"
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        <StyledTrackHeader
          width={this.props.width}
          height={this.props.height}
          gutter={this.props.gutter}
          color={this.props.color}
        >
          {this.state.labelEdited ? (
            <StyledLabelForm
              color={this.props.color}
              gutter={this.props.gutter}
              onSubmit={this.handleSubmit}
              // onClick={() => this.setState({ labelEdited: false })}
            >
              <input type="text" name="label" defaultValue={this.props.label} />
            </StyledLabelForm>
          ) : (
            <React.Fragment>
              <TrackLabel label={this.props.label} color={this.props.color} />
              <StyledControls>
                <GainIndicator>
                  {Volume.toDBString(this.props.gain)}
                </GainIndicator>
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
            </React.Fragment>
          )}
        </StyledTrackHeader>
      </Container>
    )
  }
}

export default TrackHeader
