// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color, { hexToRgb } from "../../../../../utils/color/colorLibrary"

import type {
  AudioProcessing,
  NoteResolution
} from "../../../../../redux/store/session/types"
import type { MaterialColor } from "../../../../../utils/color/colorLibrary"
import colorLuminance from "../../../../../utils/color/colorLuminance"

type Props = {
  color: MaterialColor,
  size: number,
  gutter: number,
  noteResolution: NoteResolution,
  processing: AudioProcessing,
  played: boolean,
  scheduled: boolean,
  edited: boolean,
  onClick: () => void
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
  edited: false,
  gutter: 0
}

function Cell(props: Props) {
  const buttonRef = React.createRef<HTMLButtonElement>()

  const handleClick = () => {
    props.onClick()
    buttonRef.current && buttonRef.current.blur()
  }

  return (
    <StyledCell
      color={props.color}
      size={props.size}
      gutter={props.gutter}
      noteResolution={props.noteResolution}
      gain={props.processing.gain.gain}
      played={props.played}
      scheduled={props.scheduled}
      edited={props.edited}
      ref={buttonRef}
      onClick={() => handleClick()}
    >
      {" "}
    </StyledCell>
  )
}

const MemoizedCell = React.memo<Props>(Cell)

export default MemoizedCell
