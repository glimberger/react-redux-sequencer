// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../../utils/color/colorLibrary"

import { getActiveTrack } from "../../../../../../redux/reducers"
import { connect } from "react-redux"
import { changeNoteResolution } from "../../../../../../redux/actions/session/creators"
import { usePrefs } from "../../../../../context/sequencer-prefs"

import type {
  NoteResolution,
  Session,
  Track
} from "../../../../../../redux/store/session/types"

type OwnProps = {||}

type Props = {
  ...OwnProps,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  changeNoteResolution: (
    noteResolution: NoteResolution,
    trackID: string
  ) => void
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
  background-color: ${({ color, noteResolution, buttonResolution }) =>
    noteResolution === buttonResolution
      ? Color.get50(color)
      : Color.get400(color)};

  &:hover {
    background-color: ${({ color, noteResolution, buttonResolution }) =>
      noteResolution === buttonResolution
        ? Color.get50(color)
        : Color.get200(color)};
  }
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

const prefs = { height: 36, width: 130 }

const button1Ref = React.createRef<HTMLButtonElement>()
const button2Ref = React.createRef<HTMLButtonElement>()
const button4Ref = React.createRef<HTMLButtonElement>()

export function ResolutionSwitch(props: Props) {
  if (props.activeTrackID === null) return <div />

  const { gutter } = usePrefs()

  return (
    <StyledSwitch
      width={prefs.width}
      height={prefs.height}
      gutter={gutter}
      color={props.color}
    >
      <ResolutionButton
        color={props.color}
        noteResolution={props.noteResolution}
        buttonResolution={1}
        title={
          props.noteResolution === 1
            ? "Sixteenth notes"
            : "Switch to sixteenth notes"
        }
        ref={button1Ref}
        onClick={() => {
          if (props.activeTrackID && props.noteResolution !== 1) {
            props.changeNoteResolution(1, props.activeTrackID)
            button1Ref.current && button1Ref.current.blur()
          }
        }}
      >
        &#x266C;
      </ResolutionButton>
      <Gutter gutter={gutter}> </Gutter>
      <ResolutionButton
        color={props.color}
        noteResolution={props.noteResolution}
        buttonResolution={2}
        title={
          props.noteResolution === 2 ? "Eighth notes" : "Switch to eighth notes"
        }
        ref={button2Ref}
        onClick={() => {
          if (props.activeTrackID && props.noteResolution !== 2) {
            props.changeNoteResolution(2, props.activeTrackID)
            button2Ref.current && button2Ref.current.blur()
          }
        }}
      >
        &#x266B;
      </ResolutionButton>
      <Gutter gutter={gutter}> </Gutter>
      <ResolutionButton
        color={props.color}
        noteResolution={props.noteResolution}
        buttonResolution={4}
        title={
          props.noteResolution === 4
            ? "Quarter notes"
            : "Switch to quarter notes"
        }
        ref={button4Ref}
        onClick={() => {
          if (props.activeTrackID && props.noteResolution !== 4) {
            props.changeNoteResolution(4, props.activeTrackID)
            button4Ref.current && button4Ref.current.blur()
          }
        }}
      >
        &#x2669;
      </ResolutionButton>
    </StyledSwitch>
  )
}

const ResolutionSwitchMemoized = React.memo<Props>(ResolutionSwitch)

const mapStateToProps = state => {
  const track = getActiveTrack(state)

  return {
    color: track ? track.color : "grey",
    noteResolution: track ? track.noteResolution : 1,
    activeTrackID: state.session.activeTrackID
  }
}

const ResolutionSwitchWithConnect = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { changeNoteResolution }
)(ResolutionSwitchMemoized)

export default ResolutionSwitchWithConnect
