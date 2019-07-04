import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import Color, {
  hexToRgb,
  MaterialColor
} from "../../../../../utils/color/colorLibrary"
import colorLuminance from "../../../../../utils/color/colorLuminance"
import { AnyAction, getCell, getTrack } from "../../../../../redux/reducers"
import { isCellPlayed } from "../../../../../services/cell"
import { toggleTrackCell } from "../../../../../redux/actions/session/creators"
import { usePrefs } from "../../../../context/sequencer-prefs"
import { NoteResolution } from "../../../../../redux/store/session/interfaces"
import { IAppState } from "../../../../../redux/store/configureStore"
import { Dispatch } from "redux"

interface IOwnProps {
  trackID: string
  beatNumber: number
  gutter: number
}

interface IProps extends IOwnProps {
  activeTrackID: string | null
  color: MaterialColor
  noteResolution: NoteResolution
  gain: number
  played: boolean
  scheduled: boolean
  edited: boolean
  rendered: boolean
  onClick: (beat: number, trackID: string) => void
}

const cellWidth = (
  resolution: NoteResolution,
  size: number,
  margin: number
): number => {
  if (resolution === 1) {
    return (size + margin) / 2.0 - margin
  }
  if (resolution === 2) {
    return size
  }
  if (resolution === 4) {
    return (size + margin) * 2.0 - margin
  }

  return size
}

const borderColor = (
  color: MaterialColor,
  edited: boolean,
  played: boolean,
  scheduled: boolean,
  hover: boolean
): string => {
  if (edited) {
    return hover ? Color.get50(color) : Color.get100(color)
  }

  if (played) {
    return hover ? Color.get100(color) : Color.getA100(color)
  }

  if (scheduled) {
    return hover ? Color.getA100(color) : Color.getA700(color)
  }

  return hover
    ? Color.getA100(color)
    : colorLuminance(Color.getA700(color), -0.4)
}

const StyledCell = styled.button<{
  size: number
  noteResolution: NoteResolution
  gutter: number
  edited: boolean
  played: boolean
  scheduled: boolean
  color: MaterialColor
  gain: number
}>`
  cursor: pointer;
  height: ${({ size }) => size}px;
  width: ${({ noteResolution, size, gutter }) =>
    cellWidth(noteResolution, size, gutter)}px;
  margin-right: ${({ gutter }) => gutter}px;
  padding: 0;
  border: 3px solid
    ${({ color, edited, played, scheduled }) =>
      borderColor(color, edited, played, scheduled, false)};
  border-radius: 3px;
  background-color: ${({ scheduled, color, gain }) => {
    const rgb = hexToRgb(Color.getA700(color))
    return scheduled
      ? `rgba(${rgb ? rgb.r : 255}, ${rgb ? rgb.g : 255}, ${
          rgb ? rgb.b : 255
        }, ${gain})`
      : "transparent"
  }};

  &:hover {
    border-color: ${({ color, edited, played, scheduled }) =>
      borderColor(color, edited, played, scheduled, true)};
    background-color: ${({ color, scheduled }) => {
      return scheduled ? Color.getA400(color) : "transparent"
    }};
  }
`

Cell.defaultProps = {
  rendered: true,
  edited: false,
  gutter: 0
}

export function Cell(props: IProps) {
  if (!props.rendered) {
    return <div />
  }

  const { cellSize } = usePrefs()
  const buttonRef = React.createRef<HTMLButtonElement>()

  const handleClick = () => {
    props.onClick(props.beatNumber, props.trackID)
    // tslint:disable-next-line:no-unused-expression
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <StyledCell
      color={props.color}
      size={cellSize}
      gutter={props.gutter}
      noteResolution={props.noteResolution}
      gain={props.gain}
      played={props.played}
      scheduled={props.scheduled}
      edited={props.edited}
      ref={buttonRef}
      onClick={handleClick}
    >
      {" "}
    </StyledCell>
  )
}

const MemoizedCell = React.memo<IProps>(Cell)

const mapStateToProps = (state: IAppState, ownProps: IOwnProps) => {
  const track = getTrack(state, ownProps.trackID)
  const cell = getCell(state, ownProps.trackID, ownProps.beatNumber)

  return {
    activeTrackID: state.session.activeTrackID,
    color: track.color,
    noteResolution: track.noteResolution,
    gain: cell.processing.gain.gain,
    played: isCellPlayed(
      track.noteResolution,
      ownProps.beatNumber,
      state.audio.currentBeat
    ),
    scheduled: cell.scheduled,
    edited:
      ownProps.trackID === state.session.activeTrackID &&
      ownProps.beatNumber === state.session.activeCellBeat,
    // we don't want to keep cells out of note resolution
    rendered: ownProps.beatNumber % track.noteResolution === 0
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: IOwnProps
) => ({
  onClick: () =>
    dispatch(toggleTrackCell(ownProps.beatNumber, ownProps.trackID))
})

const CellWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoizedCell)

export default CellWithConnect
