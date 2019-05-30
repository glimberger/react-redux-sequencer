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
  getInstrumentMapping
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
import type { InstrumentMapping } from "../../../../../redux/store/instrument/types"

type OwnProps = {||}

type Props = {
  ...OwnProps,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  cell: CellType | null,
  mapping: (note: number) => InstrumentMapping | null,
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

export function CellSettings(props: Props) {
  if (props.activeTrackID === null) return <div />

  const { panelHeight, cellSize, gutter } = usePrefs()

  if (props.activeCellBeat === null || props.cell === null)
    return (
      <StyledSettings
        cellSize={cellSize}
        height={panelHeight}
        gutter={gutter}
        color={props.color}
      >
        {" "}
      </StyledSettings>
    )

  const detune = (cell: CellType | null): string => {
    if (cell == null) return ""

    const mapping = props.mapping(cell.midi)

    if (mapping === null) return "-"

    return mapping.detune + ""
  }

  return (
    <StyledSettings
      cellSize={cellSize}
      height={panelHeight}
      gutter={gutter}
      color={props.color}
    >
      <StyledNoteSection gutter={gutter}>
        <CellInfo>
          <Cell
            gutter={0}
            color={props.color}
            played={false}
            edited={false}
            scheduled={props.cell.scheduled}
            gain={props.cell.processing.gain.gain}
            noteResolution={props.noteResolution}
            activeTrackID={props.activeTrackID}
            beatNumber={props.activeCellBeat}
            trackID={props.activeTrackID || ""}
            onClick={() => {
              if (props.activeCellBeat === null || props.activeTrackID === null)
                return

              props.scheduleTrackCell(props.activeCellBeat, props.activeTrackID)
            }}
          />
          <div>
            <div>
              BEAT{" "}
              <span style={{ fontWeight: "bold" }}>{props.activeCellBeat}</span>
            </div>
            <div>
              NOTE{" "}
              <span style={{ fontWeight: "bold" }}>
                {MidiConverter.toNote(props.cell.midi)}
              </span>{" "}
              ({props.cell ? props.cell.midi : 0})
            </div>
            <div style={{ fontSize: "13px" }}>
              <span style={{ fontWeight: "lighter" }}>detune</span>{" "}
              {detune(props.cell)} cent
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
            color={props.color}
            gutter={gutter}
            size={36}
            gain={props.cell ? props.cell.processing.gain.gain : 0}
            onChange={value =>
              props.changeCellGain(
                value,
                props.activeCellBeat || 0,
                props.activeTrackID || ""
              )
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
    mapping: (note: number) =>
      getInstrumentMapping(state, state.session.activeTrackID, note)
  }
}

const CellSettingsWithConnect = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { scheduleTrackCell, changeCellGain }
)(CellSettings)

export default CellSettingsWithConnect
