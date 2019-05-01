// @flow strict
import * as React from "react"

import styles from "./AddTrack.module.css"
import Color from "../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type Props = {
  prefs: { color: MaterialColor, width: number, height: number }
}

function AddTrack({ prefs }: Props) {
  return (
    <div className={styles.Base}>
      <svg
        className={styles.Svg}
        width={prefs.width}
        height="40"
        viewBox={`0 0 ${prefs.width} ${prefs.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width={prefs.width - 3}
          height="37"
          rx="1.5"
          fill={Color.get600(prefs.color)}
          stroke={Color.get600(prefs.color)}
          strokeWidth="3"
        />
        <text
          className={styles.Title}
          x="10"
          y={0.65 * prefs.height}
          fontSize="18"
          fill={Color.get100(prefs.color)}
        >
          +
        </text>
      </svg>
    </div>
  )
}

export default AddTrack
