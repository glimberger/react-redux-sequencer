// @flow strict
import * as React from "react"

import CellColor from "../../utils/color/colorLibrary"
import styles from "./SVGSoloButton.module.css"

import type { MaterialColor } from "../../utils/color/colorLibrary"

type PropsType = {
  style: { color: MaterialColor, x: number, y: number },
  soloed: boolean,
  trackID: string,
  onSoloClick: (instrumentID: string) => void
}

function SVGSoloButton({ style, soloed, trackID, onSoloClick }: PropsType) {
  return (
    <g className={styles.SoloButton} onClick={() => onSoloClick(trackID)}>
      <rect
        x={style.x}
        y={style.y}
        width="24"
        height="24"
        rx="3"
        fill={
          soloed ? CellColor.get50(style.color) : CellColor.get400(style.color)
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
        S
      </text>
    </g>
  )
}

export default SVGSoloButton
