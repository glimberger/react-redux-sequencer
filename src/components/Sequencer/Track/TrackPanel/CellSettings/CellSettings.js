// @flow strict
import React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

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
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  cell: CellType | null,
  getMappingForNote: (note: number) => { sampleID: string, detune: number }
}

type DispatchProps = {
  scheduleTrackCell: (beat: number, trackID: string) => void
}

type Props = OwnProps & StateProps & DispatchProps

const StyledSettings = styled.div`
  flex-shrink: 0;
  border-radius: 3px;
  width: ${({ cellSize, gutter }) => cellSize * 32 + gutter * 31}px;
  height: ${({ height }) => height}px;
  margin-right: ${({ gutter }) => gutter}px;
  background-color: ${({ color }) => Color.get800Dark(color)};
  color: ${({ color }) => Color.get100(color)};
`

const NoteSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ gutter }) => gutter * 2}px;
  overflow: auto;
`

const CellInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`

function CellSettings({
  cellSize,
  height,
  gutter,
  color,
  // scheduled,
  // processing,
  // midiNote,
  activeCellBeat,
  activeTrackID,
  cell,
  noteResolution,
  scheduleTrackCell,
  getMappingForNote
}: Props) {
  if (activeTrackID === null) return <div />

  if (activeCellBeat === null || cell === null)
    return (
      <StyledSettings
        cellSize={cellSize}
        height={height}
        gutter={gutter}
        color={color}
      >
        {" "}
      </StyledSettings>
    )

  const detune = getMappingForNote(cell.midi).detune

  return (
    <StyledSettings
      cellSize={cellSize}
      height={height}
      gutter={gutter}
      color={color}
    >
      <NoteSection gutter={gutter}>
        <CellInfo>
          <Cell
            size={cellSize}
            gutter={0}
            color={color}
            played={false}
            edited={false}
            scheduled={cell.scheduled}
            processing={cell.processing}
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
                {MidiConverter.toNote(cell.midi)}
              </span>{" "}
              ({cell.midi})
            </div>
            <div style={{ fontSize: "13px" }}>
              <span style={{ fontWeight: "lighter" }}>detune</span> {detune}{" "}
              cent
            </div>
          </div>
        </CellInfo>
        <div>
          <NoteSelectorWithConnect
            gutter={gutter}
            cellSize={cellSize}
            height={cellSize * 2}
            keyWidth={16}
          />
        </div>
      </NoteSection>
    </StyledSettings>
  )
}

export default CellSettings
