// @flow strict
import * as React from "react"

import Controller from "../../controllers/Fader/Fader"
import Volume from "../../../audio/utils/Volume/Volume"
import styles from "./MasterGainController.module.css"

type Props = {
  gain: number,
  changeMasterGain: (gain: number) => void
}

function MasterGainController({ changeMasterGain, gain }: Props) {
  const handleGainChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    changeMasterGain(parseFloat(value))
  }

  return (
    <div className={styles.Container}>
      <Controller
        orientation="horizontal"
        color="blueGrey"
        size={140}
        value={gain}
        onChange={handleGainChange}
        max={1}
        min={0}
        step={0.001}
      />
      <span className={styles.Indicator}>{Volume.toDBString(gain)}</span>
    </div>
  )
}

export default MasterGainController
