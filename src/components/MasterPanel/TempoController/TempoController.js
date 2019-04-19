// @flow strict
import React from "react"

import styles from "./TempoController.module.css"
import ValueController from "../../controllers/ValueController/ValueController"

type PropsType = {
  orientation: "vertical" | "horizontal",
  tempo: number,
  onChange: (value: number) => void
}

function TempoController({ orientation, tempo, onChange }: PropsType) {
  return (
    <div className={styles.Container}>
      <ValueController
        value={tempo}
        onChange={onChange}
        amount={2}
        min={20}
        max={200}
        prefs={{ color: "blueGrey" }}
      />
      {/*<span className={styles.Indicator}>{tempo} BPM</span>*/}
    </div>
  )
}

export default TempoController
