// @flow strict
import React from "react"

import CellColor from "../../utils/color/colorLibrary"
import styles from "./Cell.module.css"

import type { MaterialColor } from "../../utils/color/colorLibrary"
import type { NoteResolution } from "../../redux/store/session/types"

type Props = {
  color: MaterialColor,
  played: boolean,
  scheduled: boolean,
  edited: boolean,
  size: number,
  noteResolution: NoteResolution,
  onClick: () => void
}

Cell.defaultProps = {
  size: 40,
  edited: false
}

function Cell({
  color,
  size,
  played,
  scheduled,
  edited,
  noteResolution,
  onClick
}: Props) {
  const rightMargin = 6
  const processWidth =
    noteResolution === 1
      ? (size + rightMargin) / 2.0 - rightMargin
      : noteResolution === 2
      ? size
      : (size + rightMargin) * 2 - rightMargin

  return (
    <div className={styles.Base} style={{ maxHeight: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={processWidth + rightMargin}
        height={size}
        fill="none"
        className={styles.Svg}
        onClick={onClick}
      >
        <rect
          x="1.5"
          y="1.5"
          width={processWidth - 3}
          height={size - 3}
          rx="1.5"
          ry="1.5"
          fill={scheduled ? CellColor.getA700(color) : "none"}
          stroke={
            edited
              ? CellColor.get100(color)
              : played
              ? CellColor.getA100(color)
              : CellColor.getA700(color)
          }
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}

export default Cell
