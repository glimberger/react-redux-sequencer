// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../../utils/color/colorLibrary"

import type {
  NoteResolution,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import type { MaterialColor } from "../../../../../../utils/color/colorLibrary"

type OwnProps = {
  gutter: number
}

type StateProps = {
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type DispatchProps = {
  changeNoteResolution: (
    noteResolution: NoteResolution,
    trackID: string
  ) => void
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  hoverButtonResolution_1: boolean,
  hoverButtonResolution_2: boolean,
  hoverButtonResolution_4: boolean
}

const StyledSwitch = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 3px;
  user-select: none;
  z-index: 999;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ gutter }) => gutter}px;
  background-color: ${({ color }) => Color.get700(color)};
`

const ResolutionButton = styled.button`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ noteResolution, buttonResolution }) =>
    noteResolution === buttonResolution ? "default" : "pointer"};
  padding: 0;
  border-radius: 3px;
  border: none;
  font-size: 12px;
  background-color: ${({ color, noteResolution, buttonResolution, hover }) =>
    ResolutionSwitch.backGroundColor(
      color,
      noteResolution === buttonResolution,
      hover
    )};
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

class ResolutionSwitch extends React.Component<Props, State> {
  state = {
    hoverButtonResolution_1: false,
    hoverButtonResolution_2: false,
    hoverButtonResolution_4: false
  }

  prefs = {
    height: 36,
    width: 130
  }

  button1Ref = React.createRef<HTMLButtonElement>()
  button2Ref = React.createRef<HTMLButtonElement>()
  button4Ref = React.createRef<HTMLButtonElement>()

  hoverOn(noteResolution: NoteResolution) {
    this.setState({ [`hoverButtonResolution_${noteResolution}`]: true })
  }
  hoverOff(noteResolution: NoteResolution) {
    this.setState({ [`hoverButtonResolution_${noteResolution}`]: false })
  }

  static backGroundColor(
    color: MaterialColor,
    active: boolean,
    hover: boolean
  ) {
    return active
      ? Color.get50(color)
      : hover
      ? Color.get200(color)
      : Color.get400(color)
  }

  render() {
    if (!this.props.activeTrackID) return null

    return (
      <StyledSwitch
        width={this.prefs.width}
        height={this.prefs.height}
        gutter={this.props.gutter}
        color={this.props.color}
      >
        <ResolutionButton
          color={this.props.color}
          noteResolution={this.props.noteResolution}
          buttonResolution={1}
          hover={this.state.hoverButtonResolution_1}
          title={
            this.props.noteResolution === 1
              ? "Sixteenth notes"
              : "Switch to sixteenth notes"
          }
          ref={this.button1Ref}
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 1) {
              this.props.changeNoteResolution(1, this.props.activeTrackID)
              this.button1Ref.current && this.button1Ref.current.blur()
            }
          }}
          onMouseEnter={() => this.hoverOn(1)}
          onMouseLeave={() => this.hoverOff(1)}
        >
          &#x266C;
        </ResolutionButton>
        <Gutter gutter={this.props.gutter}> </Gutter>
        <ResolutionButton
          color={this.props.color}
          noteResolution={this.props.noteResolution}
          buttonResolution={2}
          hover={this.state.hoverButtonResolution_2}
          title={
            this.props.noteResolution === 2
              ? "Eighth notes"
              : "Switch to eighth notes"
          }
          ref={this.button2Ref}
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 2) {
              this.props.changeNoteResolution(2, this.props.activeTrackID)
              this.button2Ref.current && this.button2Ref.current.blur()
            }
          }}
          onMouseEnter={() => this.hoverOn(2)}
          onMouseLeave={() => this.hoverOff(2)}
        >
          &#x266B;
        </ResolutionButton>
        <Gutter gutter={this.props.gutter}> </Gutter>
        <ResolutionButton
          color={this.props.color}
          noteResolution={this.props.noteResolution}
          buttonResolution={4}
          hover={this.state.hoverButtonResolution_2}
          title={
            this.props.noteResolution === 4
              ? "Quarter notes"
              : "Switch to quarter notes"
          }
          ref={this.button4Ref}
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 4) {
              this.props.changeNoteResolution(4, this.props.activeTrackID)
              this.button4Ref.current && this.button4Ref.current.blur()
            }
          }}
          onMouseEnter={() => this.hoverOn(4)}
          onMouseLeave={() => this.hoverOff(4)}
        >
          &#x2669;
        </ResolutionButton>
      </StyledSwitch>
    )
  }
}

export default ResolutionSwitch
