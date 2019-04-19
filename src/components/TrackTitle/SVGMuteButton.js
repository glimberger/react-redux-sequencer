// @flow strict
import * as React from "react"

import CellColor from "../../utils/color/colorLibrary"
import styles from "./SVGMuteButton.module.css"

import type { MaterialColor } from "../../utils/color/colorLibrary"

type PropsType = {
  style: { color: MaterialColor, x: number, y: number },
  muted: boolean,
  trackID: string,
  onMuteClick: (instrumentID: string) => void
}

function SVGMuteButton({ style, muted, trackID, onMuteClick }: PropsType) {
  return (
    <g className={styles.MuteButton} onClick={() => onMuteClick(trackID)}>
      <rect
        x={style.x}
        y={style.y}
        width="24"
        height="24"
        rx="3"
        fill={
          muted ? CellColor.get50(style.color) : CellColor.get400(style.color)
        }
      />
      <text
        className={styles.Text}
        x={style.x + 12}
        y={style.y + 17}
        fontSize="14"
        fontWeight="700"
        textAnchor="middle"
        fill={CellColor.get900(style.color)}
      >
        M
      </text>
    </g>
  )
}

export default SVGMuteButton
