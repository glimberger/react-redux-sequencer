// @flow strict
import * as React from "react"

import AddTrack from "./AddTrack/AddTrack"
import styles from "./Matrix.module.css"
import TrackWithConnect from "./Track/TrackWithConnect"

import type { Track as TrackType } from "../../redux/store/session/types"

type StateProps = {|
  orderedTracks: Array<TrackType>
|}

type OwnProps = {}

type Props = StateProps & OwnProps

const prefs = {
  cellSize: 36,
  gutter: 6,
  panel: {
    width: 280,
    height: 300,
    transitionDuration: 300
  }
}

function Sequencer({ orderedTracks }: Props) {
  const css = {
    Row: {
      marginTop: `${prefs.gutter}px`
    }
  }

  return (
    <React.Fragment>
      {orderedTracks.map((track, idx) => {
        const trackCss = { marginTop: `${idx === 0 ? 0 : prefs.gutter}px` }

        return (
          <div key={track.id} style={trackCss}>
            <TrackWithConnect
              trackID={track.id}
              panelWidth={prefs.panel.width}
              panelHeight={prefs.panel.height}
              gutter={prefs.gutter}
              cellSize={prefs.cellSize}
            />
          </div>
        )
      })}
      <div style={css.Row}>
        <div className={styles.Row}>
          <AddTrack
            prefs={{
              color: "grey",
              width: prefs.panel.width,
              height: prefs.cellSize
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sequencer
