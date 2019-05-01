// @flow strict
import * as React from "react"

import styles from "./TrackSettings.module.css"
import Color from "../../../../../utils/color/colorLibrary"
import GainControllerWithConnect from "./GainController/GainControllerWithConnect"

import type { Track } from "../../../../../redux/store/session/types"
import ResolutionSwitchWithConnect from "./ResolutionSwitch/ResolutionSwitchWithConnect"

type OwnProps = {
  width: number,
  height: number,
  gutter: number
}

type StateProps = {
  color: $PropertyType<Track, "color">,
  isTrackActive: boolean
}

type DispatchProps = {}

type Props = OwnProps & StateProps & DispatchProps

function TrackSettings({ width, height, gutter, color, isTrackActive }: Props) {
  if (!isTrackActive) return <div />

  const css = {
    Main: {
      width: width,
      height: height,
      backgroundColor: Color.get900(color)
    },
    Volume: {
      width: `${6 * gutter + 24}px`,
      borderRight: `1px solid ${Color.get800(color)}`
    },
    Volume_Inner: {
      padding: `${gutter}px ${gutter}px`
    },
    VolumeAside: {
      width: `${width - (6 * gutter + 24)}px`
    },
    NoteResolution: {
      padding: `${2 * gutter}px`,
      borderBottom: `1px solid ${Color.get800(color)}`
    }
  }

  return (
    <div style={css.Main} className={styles.Main}>
      <div className={styles.TrackSettings}>
        <div className={styles.Volume} style={css.Volume}>
          <div style={css.Volume_Inner}>
            <GainControllerWithConnect
              size={height - gutter * 5}
              gutter={gutter}
            />
          </div>
        </div>
        <div className={styles.AllButVolume} style={css.VolumeAside}>
          <div style={css.NoteResolution} className={styles.noteResolution}>
            <ResolutionSwitchWithConnect gutter={gutter} />
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default TrackSettings
