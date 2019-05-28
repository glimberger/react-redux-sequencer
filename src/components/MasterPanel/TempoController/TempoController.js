// @flow strict
import * as React from "react"

import styles from "./TempoController.module.css"
import ValueController from "../../controllers/ValueController/ValueController"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

export type OwnProps = {|
  color: MaterialColor
|}

export type Props = {
  ...OwnProps,
  tempo: number,
  onChange: (value: number) => void
}

function TempoController({ color, tempo, onChange }: Props) {
  return (
    <div className={styles.Container}>
      <ValueController
        value={tempo}
        onChange={onChange}
        amount={2}
        min={20}
        max={200}
        prefs={{ color }}
      />
    </div>
  )
}

export default TempoController
