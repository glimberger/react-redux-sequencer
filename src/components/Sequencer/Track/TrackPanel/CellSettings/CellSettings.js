// @flow strict
import React from "react"

import styles from "./CellSettings.module.css"
import Color from "../../../../../utils/color/colorLibrary"
import Cell from "../../CellRow/Cell/Cell"

import type {
  Session,
  Track,
  Cell as CellType
} from "../../../../../redux/store/session/types"

type OwnProps = {
  gutter: number,
  height: number,
  cellSize: number
}

type StateProps = {
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  isActiveTrack: boolean,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  scheduled: $PropertyType<CellType, "scheduled">
}

type DispatchProps = {
  scheduleTrackCell: (beat: number, trackID: string) => void
}

type Props = OwnProps & StateProps & DispatchProps

function CellSettings({
  cellSize,
  height,
  gutter,
  color,
  scheduled,
  activeCellBeat,
  isActiveTrack,
  activeTrackID,
  noteResolution,
  scheduleTrackCell
}: Props) {
  if (!isActiveTrack) return <div />

  const css = {
    Container: {
      width: `${cellSize * 32 + gutter * 31}px`,
      height: height,
      marginRight: `${gutter}px`,
      backgroundColor: Color.get900(color),
      color: Color.get100(color)
    },
    NoteSection: {
      padding: `${gutter * 2}px`,
      borderBottom: `1px solid ${Color.get800(color)}`
    },
    FilterSection: {
      padding: `${gutter * 2}px`
    }
  }

  if (!activeTrackID) return <div />

  if (activeCellBeat === null)
    return (
      <div style={css.Container} className={styles.Container}>
        {" "}
      </div>
    )

  return (
    <div style={css.Container} className={styles.Container}>
      <div style={css.NoteSection} className={styles.NoteSection}>
        <Cell
          size={cellSize}
          gutter={0}
          color={color}
          played={false}
          edited={false}
          scheduled={scheduled}
          noteResolution={noteResolution}
          onClick={() => scheduleTrackCell(activeCellBeat, activeTrackID)}
        />
        <div>BEAT {activeCellBeat}</div>
      </div>
      <div style={css.FilterSection}>FILTER SECTION</div>
    </div>
  )
}

export default CellSettings
