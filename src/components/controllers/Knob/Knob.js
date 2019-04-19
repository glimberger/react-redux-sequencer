// @flow strict
import * as React from "react"

import styles from "./Knob.module.css"
import { coordinates } from "../../../utils/trigo/polar"
import CellColor from "../../../utils/color/colorLibrary"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type PropsType = {
  value: number,
  onChange: (value: number) => void,
  min: number,
  max: number,
  step: number,
  prefs: { color: MaterialColor, size: number }
}

function Knob({ value, min, max, step, prefs, onChange }: PropsType) {
  const angle = (360 / (1.0 * (max - min))) * (parseFloat(value) - min)

  const { x, y } = coordinates(35, 35, 35)(angle)

  return (
    <div
      className={styles.Container}
      style={{ width: `${prefs.size}px`, height: `${prefs.size}px` }}
    >
      <svg
        className={styles.Visual}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#333842" />
        <path
          fill={CellColor.getA100(prefs.color)}
          d={`M35 35L35 70A35 35 0 ${angle < 180 ? 0 : 1} 1 ${x} ${y}L35 35`}
        />
        <g
          style={{
            transform: "rotate(" + angle + "deg)",
            transformOrigin: "center center"
          }}
        >
          <circle cx="35" cy="35" r="29" fill="#21252B" />
          <circle cx="35" cy="56" r="4" fill={CellColor.getA100(prefs.color)} />
        </g>
      </svg>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className={styles.Input}
        value={value}
        onChange={(e: SyntheticInputEvent<HTMLInputElement>) => {
          const { value } = e.currentTarget

          onChange(parseFloat(value))
        }}
      />
      <div>{angle}</div>
    </div>
  )
}

export default Knob
