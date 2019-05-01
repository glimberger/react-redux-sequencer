// @flow strict
import * as React from "react"

import Color from "../../../utils/color/colorLibrary"
import styles from "./ValueController.module.css"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type PropsType = {
  value: number,
  onChange: (value: number) => void,
  amount: number,
  min: number,
  max: number,
  prefs: { color: MaterialColor }
}

function ValueController({ value, onChange, amount, min, max }: PropsType) {
  const increment = () => {
    const nextValue = value + amount > max ? max : value + amount

    return onChange(nextValue)
  }

  const decrement = () => {
    const nextValue = value - amount < min ? min : value - amount

    return onChange(nextValue)
  }

  return (
    <div>
      <svg
        width="129"
        height="40"
        viewBox="0 0 129 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="129" height="40" rx="3" fill={Color.get700("blueGrey")} />
        <text
          className={styles.Display}
          x={80}
          y={26}
          fontSize="16"
          fontWeight={"normal"}
          textAnchor="end"
          fill="#eceff1"
        >
          {`${value} BPM`}
        </text>
        <path
          className={styles.Button}
          d="M108 6L120.124 16.5H95.8756L108 6Z"
          fill={Color.get900("blueGrey")}
          onClick={increment}
        />
        <path
          className={styles.Button}
          d="M108 34L95.8756 23.5L120.124 23.5L108 34Z"
          fill={Color.get900("blueGrey")}
          onClick={decrement}
        />
      </svg>
    </div>
  )
}

export default ValueController
