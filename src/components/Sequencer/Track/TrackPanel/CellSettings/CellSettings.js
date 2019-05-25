// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../utils/color/colorLibrary"
import NoteSelectorWithConnect from "./NoteSelector/NoteSelectorWithConnect"
import MidiConverter from "../../../../../utils/audio/MidiConverter"
import GainKnob from "./GainKnob/GainKnob"
import { PrefsContext } from "../../../Prefs/PrefsContext"
import { Cell } from "../../CellRow/Cell/Cell"

import type {
  Session,
  Track,
  Cell as CellType
} from "../../../../../redux/store/session/types"

type StateProps = {
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  cell: CellType | null,
  getMappingForNote: (note: number) => { sampleID: string, detune: number }
}

type DispatchProps = {
  scheduleTrackCell: (beat: number, trackID: string) => void,
  changeCellGain: (gain: number, beat: number, trackID: string) => void
}

type Props = StateProps & DispatchProps

const StyledSettings = styled.div`
  flex-shrink: 0;
  border-radius: 3px;
  width: ${({ cellSize, gutter }) => cellSize * 32 + gutter * 31}px;
  height: ${({ height }) => height}px;
  margin-right: ${({ gutter }) => gutter}px;
  background-color: ${({ color }) => Color.get800Dark(color)};
  color: ${({ color }) => Color.get100(color)};
`

const StyledNoteSection = styled.section`
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

const StyledGainSection = styled.section`
  display: flex;
  justify-content: space-between;
`

function CellSettings({
  color,
  activeCellBeat,
  activeTrackID,
  cell,
  changeCellGain,
  getMappingForNote,
  noteResolution,
  scheduleTrackCell
}: Props) {
  if (activeTrackID === null) return <div />

  const prefs = React.useContext(PrefsContext)

  if (activeCellBeat === null || cell === null)
    return (
      <StyledSettings
        cellSize={prefs.cellSize}
        height={prefs.panelHeight}
        gutter={prefs.gutter}
        color={color}
      >
        {" "}
      </StyledSettings>
    )

  const detune = getMappingForNote(cell.midi).detune

  return (
    <StyledSettings
      cellSize={prefs.cellSize}
      height={prefs.panelHeight}
      gutter={prefs.gutter}
      color={color}
    >
      <StyledNoteSection gutter={prefs.gutter}>
        <CellInfo>
          <Cell
            size={prefs.cellSize}
            gutter={0}
            color={color}
            played={false}
            edited={false}
            scheduled={cell.scheduled}
            processing={cell.processing}
            noteResolution={noteResolution}
            activeTrackID={activeTrackID}
            beatNumber={activeCellBeat}
            trackID={activeTrackID}
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
            gutter={prefs.gutter}
            cellSize={prefs.cellSize}
            height={prefs.cellSize * 2}
            keyWidth={16}
          />
        </div>
      </StyledNoteSection>
      <section style={{ display: "flex", padding: `${prefs.gutter * 2}px` }}>
        <StyledGainSection>
          <GainKnob
            color={color}
            gutter={prefs.gutter}
            size={36}
            gain={cell.processing.gain.gain}
            onChange={value =>
              changeCellGain(value, activeCellBeat, activeTrackID)
            }
          />
        </StyledGainSection>
      </section>
    </StyledSettings>
  )
}

export default CellSettings
