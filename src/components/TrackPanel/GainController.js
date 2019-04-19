// @flow strict
import React from "react"
import Controller from "../controllers/Fader/Fader"
import type { MaterialColor } from "../../utils/color/colorLibrary"

type PropsType = {
  prefs: { color: MaterialColor, size: number },
  gain: number,
  onGainChange: (gain: number) => void
}

function GainController({ prefs, gain, onGainChange }: PropsType) {
  const handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    onGainChange(parseFloat(value))
  }
  return (
    <div>
      <Controller
        orientation="vertical"
        color={prefs.color}
        size={prefs.size}
        value={gain}
        onChange={handleChange}
        max={1}
        min={0}
        step={0.001}
      />
    </div>
  )
}

export default GainController
