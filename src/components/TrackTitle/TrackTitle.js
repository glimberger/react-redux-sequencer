// @flow strict
import * as React from "react"

import type { MaterialColor } from "../../utils/color/colorLibrary"

import CellColor from "../../utils/color/colorLibrary"
import SVGMuteButton from "./SVGMuteButton"
import SVGSoloButton from "./SVGSoloButton"
import styles from "./TrackTitle.module.css"
import Volume from "../../audio/utils/Volume/Volume"

type PropsType = {
  prefs: { color: MaterialColor, width: number, height: number },
  label: string,
  trackID: string,
  muted: boolean,
  onMuteClick: (trackID: string) => void,
  soloed: boolean,
  onSoloClick: (trackID: string) => void,
  gain: number,
  onTitleClick: (trackID: string) => void
}

function TrackTitle({
  prefs,
  label,
  trackID,
  muted,
  onMuteClick,
  soloed,
  onSoloClick,
  gain,
  onTitleClick
}: PropsType) {
  return (
    <div className={styles.Base}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.Svg}
        width={prefs.width}
        height={prefs.height}
        fill="none"
      >
        <rect
          x="1.5"
          y="1.5"
          width={prefs.width - 3}
          height={prefs.height - 3}
          rx="1.5"
          fill={CellColor.get600(prefs.color)}
          stroke={CellColor.get600(prefs.color)}
          strokeWidth="3"
          onClick={() => onTitleClick(trackID)}
        />
        <text
          className={styles.Title}
          x="10"
          y={prefs.height / 2.0 + 5}
          fontSize="18"
          fill={CellColor.get100(prefs.color)}
        >
          {label}
        </text>
        <text
          className={styles.GainIndicator}
          x={prefs.width - 70}
          y={prefs.height / 2.0 + 4}
          fontSize="11"
          textAnchor="end"
          fill={CellColor.get100(prefs.color)}
        >
          {Volume.toDBString(gain)}
        </text>
        <SVGSoloButton
          style={{
            color: prefs.color,
            x: prefs.width - 62,
            y: prefs.height / 2.0 - 12
          }}
          soloed={soloed}
          trackID={trackID}
          onSoloClick={onSoloClick}
        />
        <SVGMuteButton
          style={{
            color: prefs.color,
            x: prefs.width - 32,
            y: prefs.height / 2.0 - 12
          }}
          trackID={trackID}
          muted={muted}
          onMuteClick={onMuteClick}
        />
      </svg>
    </div>
  )
}

export default TrackTitle
