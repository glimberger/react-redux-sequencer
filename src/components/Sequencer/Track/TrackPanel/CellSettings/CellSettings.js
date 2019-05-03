// @flow strict
import React from "react"

import styles from "./CellSettings.module.css"
import Color from "../../../../../utils/color/colorLibrary"
import Cell from "../../CellRow/Cell/Cell"
import NoteSelectorWithConnect from "./NoteSelector/NoteSelectorWithConnect"

import type {
  Session,
  Track,
  Cell as CellType
} from "../../../../../redux/store/session/types"
import MidiConverter from "../../../../../utils/audio/MidiConverter"

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
  scheduled: $PropertyType<CellType, "scheduled">,
  midiNote: $PropertyType<CellType, "midi">,
  getMappingForNote: (note: number) => { sampleID: string, detune: number }
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
  midiNote,
  activeCellBeat,
  isActiveTrack,
  activeTrackID,
  noteResolution,
  scheduleTrackCell,
  getMappingForNote
}: Props) {
  if (!isActiveTrack) return <div />

  const css = {
    Container: {
      width: `${cellSize * 32 + gutter * 31}px`,
      height: height,
      marginRight: `${gutter}px`,
      backgroundColor: Color.get900Dark(color),
      color: Color.get100(color)
    },

    NoteSection: {
      padding: `${gutter * 2}px`,
      overflow: "auto"
      // borderBottom: `2px solid ${Color.get800(color)}`
    }
  }

  if (activeTrackID === null) return <div />

  if (activeCellBeat === null)
    return (
      <div style={css.Container} className={styles.Container}>
        {" "}
      </div>
    )

  const detune = getMappingForNote(midiNote).detune

  return (
    <div style={css.Container} className={styles.Container}>
      <div style={css.NoteSection} className={styles.NoteSection}>
        <div className={styles.CellInfo}>
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
          <div>
            <div>
              BEAT <span style={{ fontWeight: "bold" }}>{activeCellBeat}</span>
            </div>
            <div>
              NOTE{" "}
              <span style={{ fontWeight: "bold" }}>
                {MidiConverter.toNote(midiNote)}
              </span>{" "}
              ({midiNote})
            </div>
            <div style={{ fontSize: "13px" }}>
              <span style={{ fontWeight: "lighter" }}>detune</span> {detune}{" "}
              cent
            </div>
          </div>
        </div>
        <div>
          <NoteSelectorWithConnect
            gutter={gutter}
            cellSize={cellSize}
            height={cellSize * 2}
            keyWidth={16}
          />
        </div>
      </div>
    </div>
  )
}

export default CellSettings
