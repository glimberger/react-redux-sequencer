// @flow strict
import * as React from "react"
import { Transition } from "react-transition-group"

import CellColor from "../../utils/color/colorLibrary"
import GainController from "./GainController"
import Volume from "../../audio/utils/Volume/Volume"
import SVGNoteResolutionSwitch from "./SVGNoteResolutionSwitch"

import styles from "./TrackPanel.module.css"

import type { MaterialColor } from "../../utils/color/colorLibrary"
import type {
  InstrumentProcessing,
  NoteResolution
} from "../../redux/store/session/types"

type PropsType = {
  prefs: {
    color: MaterialColor,
    width: number,
    height: number,
    transitionDuration: number
  },
  trackID: string,
  processing: InstrumentProcessing,
  currentTrackPanel: ?string,
  noteResolution: NoteResolution,
  onGainChange: (trackID: string, gain: number) => void,
  onResolutionChange: (resolution: NoteResolution, trackID: string) => void
}

function TrackPanel({
  prefs,
  trackID,
  processing,
  currentTrackPanel,
  noteResolution,
  onGainChange,
  onResolutionChange
}: PropsType) {
  const { color, height, width, transitionDuration } = prefs
  const defaultStyle = {
    transition: `opacity ${transitionDuration}ms ease-in-out, height ${transitionDuration}ms ease-in-out`,
    opacity: 0,
    height: 0
  }

  const transitionStyles = {
    entering: { opacity: 0, height: 0 },
    entered: { opacity: 1, height: `${height}px` },
    unmounted: {},
    exiting: {}
  }

  const position = { switch: { x: 170, y: 20 } }

  return (
    <Transition in={currentTrackPanel === trackID} timeout={transitionDuration}>
      {state => {
        if (state === "exited") return null

        return (
          <div style={{ position: "relative" }}>
            <div
              className={styles.Base}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width={width - 3}
                  height={height - 3}
                  rx="1.5"
                  fill={CellColor.get600(color)}
                  stroke={CellColor.get900(color)}
                  strokeWidth="3"
                />

                <foreignObject x={24} y={20} width={30} height={240}>
                  <GainController
                    prefs={{ color: color, size: 230 }}
                    gain={processing.gain.gain}
                    onGainChange={gain => onGainChange(trackID, gain)}
                  />
                </foreignObject>

                <text
                  x="58"
                  y="280"
                  fontSize="12"
                  textAnchor="end"
                  fill={CellColor.get100(color)}
                >
                  {Volume.toDBString(processing.gain.gain)}
                </text>
                <SVGNoteResolutionSwitch
                  position={position.switch}
                  height={0}
                  width={0}
                  color={color}
                  noteResolution={noteResolution}
                  onResolutionChange={res => onResolutionChange(res, trackID)}
                />
              </svg>
            </div>
          </div>
        )
      }}
    </Transition>
  )
}

export default TrackPanel
