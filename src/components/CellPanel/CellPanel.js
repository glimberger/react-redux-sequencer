// @flow strict
import React from "react"
import { Transition } from "react-transition-group"

import styles from "./CellPanel.module.css"
import CellColor from "../../utils/color/colorLibrary"
import Cell from "../Cell/Cell"

import type { MaterialColor } from "../../utils/color/colorLibrary"
import MidiConverter from "../../utils/audio/MidiConverter"

type Props = {|
  prefs: {| height: number, transitionDuration: number |},
  currentCellPanel: {| beat: number, trackID: string |} | null,
  trackID: string,
  currentBeat: number,
  cell: {|
    scheduled: boolean,
    midi: number
  |} | null,
  color: MaterialColor,
  onCellClick: (beat: number, trackID: string) => void
|}

function CellPanel({
  prefs,
  currentCellPanel,
  trackID,
  currentBeat,
  cell,
  color,
  onCellClick
}: Props) {
  const { height, transitionDuration } = prefs
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

  const styleContainer = {
    background: CellColor.get400(color),
    border: `solid 3px ${CellColor.getA700(color)}`
  }

  return (
    <Transition
      in={!!currentCellPanel && currentCellPanel.trackID === trackID}
      timeout={transitionDuration}
    >
      {state => {
        if (state === "exited") {
          return null
        }
        if (cell === null) {
          return null
        }
        if (currentCellPanel === null) {
          return null
        }

        return (
          <div style={{ position: "relative" }}>
            <div
              className={styles.Container}
              style={{
                ...styleContainer,
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div className={styles.Row}>
                <Cell
                  noteResolution={2}
                  color={color}
                  size={20}
                  played={currentBeat === currentCellPanel.beat}
                  scheduled={cell.scheduled}
                  onClick={() => onCellClick(currentCellPanel.beat, trackID)}
                />
                <div style={{ width: "100%", marginLeft: "0.5rem" }}>
                  {`BEAT ${currentCellPanel.beat + 1} — ${MidiConverter.toNote(
                    cell.midi
                  ) || ""}`}
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Transition>
  )
}

export default CellPanel
