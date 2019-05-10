// @flow strict
import * as React from "react"
import { connect } from "react-redux"

import { getActiveTrack } from "../../../../../redux/reducers"
import { changeTrackGain } from "../../../../../redux/actions/session/creators"
import VerticalFader from "../../../../controllers/VerticalFader/VerticalFader"

import type { MaterialColor } from "../../../../../utils/color/colorLibrary"
import type { Session } from "../../../../../redux/store/session/types"

type Props = {
  // own props
  height: number,
  width: number,
  color: MaterialColor,
  fontSize: number,
  // state props
  value: number,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  // dispatch props
  changeTrackGain: (trackId: string, gain: number) => void
}

function Fader({
  height,
  width,
  color,
  fontSize,
  value,
  activeTrackID,
  changeTrackGain
}: Props) {
  return (
    <VerticalFader
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      value={value}
      onValueChange={value => {
        if (!activeTrackID) return

        changeTrackGain(activeTrackID, value)
      }}
    />
  )
}

const mapStateToProps = state => {
  const track = getActiveTrack(state)

  return {
    value: track ? track.processing.gain.gain : 1,
    activeTrackID: state.session.activeTrackID
  }
}

const VerticalFaderWithConnect = connect(
  mapStateToProps,
  { changeTrackGain }
)(Fader)

export default VerticalFaderWithConnect
