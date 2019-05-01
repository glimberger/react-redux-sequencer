// @flow strict
import React from "react"

import styles from "./TrackPanel.module.css"
import TrackSettingsWithConnect from "./TrackSettings/TrackSettingsWithConnect"

import CellSettingsWithConnect from "./CellSettings/CellSettingsWithConnect"

type Props = {
  headerWidth: number,
  height: number,
  gutter: number,
  cellSize: number
}

function TrackPanel({ headerWidth, height, gutter, cellSize }: Props) {
  const css = {
    TrackPanel: {
      marginBottom: `${gutter}px`
    },
    Gutter: {
      marginLeft: `${gutter}px`
    }
  }

  return (
    <div style={css.TrackPanel} className={styles.TrackPanel}>
      <TrackSettingsWithConnect
        width={headerWidth}
        height={height}
        gutter={gutter}
      />
      <div style={css.Gutter}> </div>
      <CellSettingsWithConnect cellSize={cellSize} gutter={gutter} />
    </div>
  )
}

export default TrackPanel
