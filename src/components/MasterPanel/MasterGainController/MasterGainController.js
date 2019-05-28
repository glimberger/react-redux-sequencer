// @flow strict
import * as React from "react"

import Controller from "../../controllers/Fader/Fader"
import Volume from "../../../audio/utils/Volume/Volume"
import styles from "./MasterGainController.module.css"

import type { MaterialColor } from "../../../utils/color/colorLibrary"
import Color from "../../../utils/color/colorLibrary"

export type OwnProps = {|
  color: MaterialColor
|}

export type Props = {
  ...OwnProps,
  gain: number,
  changeMasterGain: (gain: number) => void
}

function MasterGainController({ changeMasterGain, gain, color }: Props) {
  const handleGainChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    changeMasterGain(parseFloat(value))
  }

  const css = {
    Indicator: {
      color: Color.get50(color)
    }
  }

  return (
    <div className={styles.Container}>
      <Controller
        orientation="horizontal"
        color={color}
        size={140}
        value={gain}
        onChange={handleGainChange}
        max={1}
        min={0}
        step={0.001}
      />
      <span style={css.Indicator} className={styles.Indicator}>
        {Volume.toDBString(gain)}
      </span>
    </div>
  )
}

export default MasterGainController
