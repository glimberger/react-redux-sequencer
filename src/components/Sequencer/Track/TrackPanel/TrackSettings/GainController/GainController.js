// @flow strict
import * as React from "react"

import Controller from "../../../../../controllers/Fader/Fader"

import type {
  GainProcessing,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import Volume from "../../../../../../audio/utils/Volume/Volume"
import Color from "../../../../../../utils/color/colorLibrary"

type OwnProps = {
  size: number,
  gutter: number,
  onGainChange: (gain: number) => void
}
type StateProps = {
  color: $PropertyType<Track, "color">,
  gain: $PropertyType<GainProcessing, "gain">,
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type DispatchProps = {
  changeTrackGain: (trackId: string, gain: number) => void
}

type Props = OwnProps & StateProps & DispatchProps

function GainController({
  color,
  size,
  gutter,
  gain,
  activeTrackID,
  changeTrackGain
}: Props) {
  if (!activeTrackID) return <div />

  const handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    changeTrackGain(activeTrackID, parseFloat(value))
  }

  const css = {
    GainController: {
      height: size,
      padding: `${2 * gutter}px`
    },
    GainIndicator: {
      padding: `0 ${gutter}px`,
      color: Color.get100(color),
      fontSize: "11px",
      userSelect: "none",
      textAlign: "center"
    }
  }

  return (
    <div>
      <div style={css.GainController}>
        <Controller
          orientation="vertical"
          color={color}
          size={size - 4 * gutter}
          value={gain}
          onChange={handleChange}
          max={1}
          min={0}
          step={0.001}
        />
      </div>
      <div style={css.GainIndicator}>{Volume.toDBString(gain)}</div>
    </div>
  )
}

export default GainController
