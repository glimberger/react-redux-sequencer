// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color, { hexToRgb } from "../../../../../utils/color/colorLibrary"
import colorLuminance from "../../../../../utils/color/colorLuminance"
import { usePrefs } from "../../../../context/sequencer-prefs"

import type {
  AudioProcessing,
  NoteResolution
} from "../../../../../redux/store/session/types"
import type { MaterialColor } from "../../../../../utils/color/colorLibrary"

export type OwnProps = {
  trackID: string,
  beatNumber: number,
  gutter: number
}

type StateProps = {
  activeTrackID: string,
  color: MaterialColor,
  noteResolution: NoteResolution,
  processing: AudioProcessing,
  played: boolean,
  scheduled: boolean,
  edited: boolean,
  rendered: boolean
}

type DispatchProps = {
  onClick: (activeTrackID: string | null) => void
}

type Props = OwnProps & StateProps & DispatchProps

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

const StyledCell = styled.button`
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
  background-color: ${({ scheduled, hover, color, gain }) => {
    const rgb = hexToRgb(Color.getA700(color))
    return scheduled
      ? hover
        ? Color.getA400(color)
        : `rgba(${rgb ? rgb.r : 255}, ${rgb ? rgb.g : 255}, ${
            rgb ? rgb.b : 255
          }, ${gain})`
      : "transparent"
  }};

  &:hover {
    border-color: ${({ color, edited, played, scheduled }) =>
      borderColor(color, edited, played, scheduled, true)};
  }
`

Cell.defaultProps = {
  rendered: true,
  edited: false,
  gutter: 0
}

export function Cell(props: Props) {
  if (!props.rendered) return <div />

  const { cellSize } = usePrefs()
  const buttonRef = React.createRef<HTMLButtonElement>()

  const handleClick = () => {
    props.onClick(props.activeTrackID)
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <StyledCell
      color={props.color}
      size={cellSize}
      gutter={props.gutter}
      noteResolution={props.noteResolution}
      gain={props.processing.gain.gain}
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

const MemoizedCell = React.memo<Props>(Cell)

export default MemoizedCell
