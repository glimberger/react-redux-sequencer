// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"
import { connect } from "react-redux"

import MidiConverter from "../../../../../utils/audio/MidiConverter"
import GainKnob from "./GainKnob/GainKnob"
import { usePrefs } from "../../../../context/sequencer-prefs"
import { Cell } from "../../CellRow/Cell/Cell"
import NoteSelector from "./NoteSelector/NoteSelector"
import {
  getActiveCell,
  getActiveTrack,
  getInstrument
} from "../../../../../redux/reducers"
import {
  changeCellGain,
  scheduleTrackCell
} from "../../../../../redux/actions/session/creators"
import Color from "../../../../../utils/color/colorLibrary"

import type {
  Session,
  Track,
  Cell as CellType
} from "../../../../../redux/store/session/types"
import type { AppState } from "../../../../../redux/store/configureStore"

type OwnProps = {||}

type Props = {
  ...OwnProps,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  cell: CellType | null,
  getMappingForNote: (note: number) => { sampleID: string, detune: number },
  scheduleTrackCell: (beat: number, trackID: string) => void,
  changeCellGain: (gain: number, beat: number, trackID: string) => void
}

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

export function CellSettings({
  color,
  activeCellBeat,
  activeTrackID,
  cell,
  getMappingForNote,
  noteResolution,
  changeCellGain,
  scheduleTrackCell
}: Props) {
  if (activeTrackID === null) return <div />

  const { panelHeight, cellSize, gutter } = usePrefs()

  if (activeCellBeat === null || cell === null)
    return (
      <StyledSettings
        cellSize={cellSize}
        height={panelHeight}
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
      height={panelHeight}
      gutter={gutter}
      color={color}
    >
      <StyledNoteSection gutter={gutter}>
        <CellInfo>
          <Cell
            gutter={0}
            color={color}
            played={false}
            edited={false}
            scheduled={cell.scheduled}
            gain={cell.processing.gain.gain}
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
          <NoteSelector height={cellSize * 2} keyWidth={16} />
        </div>
      </StyledNoteSection>
      <section style={{ display: "flex", padding: `${gutter * 2}px` }}>
        <StyledGainSection>
          <GainKnob
            color={color}
            gutter={gutter}
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

const mapStateToProps = (state: AppState) => {
  const activeTrack = getActiveTrack(state)
  const activeCell = getActiveCell(state)

  return {
    color: activeTrack ? activeTrack.color : Color.GREY,
    noteResolution: activeTrack ? activeTrack.noteResolution : 1,
    cell: activeCell,
    activeCellBeat: state.session.activeCellBeat,
    activeTrackID: state.session.activeTrackID,
    getMappingForNote: (note: number) =>
      state.session.activeTrackID &&
      getInstrument(state, state.session.activeTrackID).mapping["M" + note]
  }
}

const CellSettingsWithConnect = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { scheduleTrackCell, changeCellGain }
)(CellSettings)

export default CellSettingsWithConnect
