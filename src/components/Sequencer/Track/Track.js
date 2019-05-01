// @flow strict
import * as React from "react"

import TrackHeaderWithConnect from "./TrackHeader/TrackHeaderWithConnect"
import CellRowWithConnect from "./CellRow/CellRowWithConnect"
import TrackPanel from "./TrackPanel/TrackPanel"

import styles from "./Track.module.css"
import type { Session } from "../../../redux/store/session/types"

type StateProps = {
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type OwnProps = {
  trackID: string,
  panelWidth: number,
  panelHeight: number,
  gutter: number,
  cellSize: number
}

type Props = StateProps & OwnProps

function Track({
  activeTrackID,
  trackID,
  panelWidth,
  panelHeight,
  gutter,
  cellSize
}: Props) {
  const css = {
    Gutter: {
      marginLeft: `${gutter}px`
    },
    TrackPanel: {
      marginTop: `${gutter}px`
    }
  }
  console.log("activeTrackID", activeTrackID)

  return (
    <div id={`track${trackID}`} className={styles.Track}>
      <div className={styles.Track_Inner}>
        <TrackHeaderWithConnect
          trackID={trackID}
          width={panelWidth}
          height={cellSize}
          gutter={gutter}
        />
        <div style={css.Gutter}> </div>
        <CellRowWithConnect trackID={trackID} size={cellSize} gutter={gutter} />
      </div>
      {trackID === activeTrackID && (
        <div style={css.TrackPanel}>
          <TrackPanel
            headerWidth={panelWidth}
            height={panelHeight}
            gutter={gutter}
            cellSize={cellSize}
          />
        </div>
      )}
    </div>
  )
}

export default Track
