// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Key from "./Key"
import MidiConverter from "../../../../../../utils/audio/MidiConverter"
import Color from "../../../../../../utils/color/colorLibrary"
import {
  getActiveCell,
  getActiveTrack,
  getInstrumentMapping,
  getSample
} from "../../../../../../redux/reducers"
import { connect } from "react-redux"
import { changeCellNote } from "../../../../../../redux/actions/session/creators"
import { listenCellNote } from "../../../../../../redux/actions/audio/creators"

import type {
  Cell,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import type { Sample } from "../../../../../../redux/store/sample/types"
import type { InstrumentMapping } from "../../../../../../redux/store/instrument/types"

type OwnProps = {|
  height: number,
  keyWidth: number
|}

type Props = {
  ...OwnProps,
  color: $PropertyType<Track, "color">,
  activeNote: $PropertyType<Cell, "midi">,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  mapping: (note: number) => InstrumentMapping | null,
  sample: (note: number) => Sample | null,
  changeCellNote: (note: number, beat: number, TrackID: string) => void,
  listenCellNote: (note: number, beat: number, trackID: string) => void
}

const StyledSelector = styled.div`
  background-color: ${({ color }) => Color.get800Dark(color)};
  color: ${({ color }) => Color.get100(color)};
  font-size: 13px;
`

const Info = styled.div`
  display: flex;
  margin-bottom: ${({ keyWidth }) => keyWidth}px;
`

const InfoItem = styled.div`
  width: ${({ itemWidth }) => itemWidth || "10%"};
  margin-left: ${({ keyWidth }) => keyWidth || 0}px;
`

const Keys = styled.div`
  display: flex;
  height: ${({ height }) => height}px;
`

const KeyWrapper = styled.div`
  margin-bottom: ${({ blackKey, height }) => (blackKey ? height * 0.4 : 0)}px;
  margin-left: ${({ blackKey, keyWidth, widthRatio }) =>
    blackKey ? -(keyWidth * widthRatio) / 2.0 : 0}px;
  margin-right: ${({ blackKey, keyWidth, widthRatio }) =>
    blackKey ? -(keyWidth * widthRatio) / 2.0 : 0}px;
  z-index: ${({ blackKey }) => (blackKey ? 10 : 1)};
`

// used to compute the width of a black key
const widthRatio = 0.75

export function NoteSelector(props: Props) {
  const [noteOnHover, setNoteOnHover] = React.useState(null)

  if (props.activeTrackID === null || props.activeCellBeat === null)
    return <div />

  const fileName = (note: number | null): string => {
    if (note == null) return ""

    const sample = props.sample(note)

    if (sample === null) return "-"

    return sample.label
  }

  const detune = (note: number | null): string => {
    if (note == null) return ""

    const mapping = props.mapping(note)

    if (mapping === null) return "-"

    return mapping.detune + " cent"
  }

  return (
    <StyledSelector color={props.color}>
      {noteOnHover !== null ? (
        <Info keyWidth={props.keyWidth}>
          <InfoItem itemWidth={"10%"}>
            <div>
              <span style={{ fontWeight: "lighter" }}>NOTE</span>{" "}
              {MidiConverter.toNote(noteOnHover)} ({noteOnHover})
            </div>
          </InfoItem>
          <InfoItem keyWidth={props.keyWidth} itemWidth={"10%"}>
            <span style={{ fontWeight: "lighter" }}>DETUNE</span>{" "}
            {detune(noteOnHover)}
          </InfoItem>
          <InfoItem keyWidth={props.keyWidth} itemWidth={"30%"}>
            <span style={{ fontWeight: "lighter" }}>SAMPLE</span>{" "}
            {fileName(noteOnHover)}
          </InfoItem>
        </Info>
      ) : (
        <Info keyWidth={props.keyWidth} style={{ opacity: 0 }}>
          <span role="img" aria-label="keyboard">
            🎹
          </span>
        </Info>
      )}

      <Keys height={props.height}>
        {[...Array(128).keys()].map(midiNote => {
          const blackKey = [1, 3, 6, 8, 10].includes(midiNote % 12)
          const disabled = props.mapping(midiNote) === null

          return (
            <KeyWrapper
              key={midiNote}
              blackKey={blackKey}
              keyWidth={props.keyWidth}
              height={props.height}
              widthRatio={widthRatio}
            >
              <Key
                disabled={disabled}
                active={midiNote === props.activeNote}
                midiNote={midiNote}
                width={blackKey ? props.keyWidth * widthRatio : props.keyWidth}
                color={props.color}
                black={blackKey}
                onClick={() => {
                  if (
                    props.activeTrackID === null ||
                    props.activeCellBeat === null ||
                    disabled
                  )
                    return

                  props.changeCellNote(
                    midiNote,
                    props.activeCellBeat,
                    props.activeTrackID
                  )
                }}
                onHoverStart={() => {
                  if (
                    props.activeTrackID === null ||
                    props.activeCellBeat === null
                  )
                    return
                  setNoteOnHover(midiNote)
                }}
                onHoverStop={() => setNoteOnHover(null)}
              />
            </KeyWrapper>
          )
        })}
      </Keys>
    </StyledSelector>
  )
}

export const NoteSelectorMemoized = React.memo<Props>(NoteSelector)

const mapStateToProps = state => {
  const track = getActiveTrack(state)
  const cell = getActiveCell(state)

  return {
    color: track ? track.color : Color.GREY,
    activeNote: cell ? cell.midi : 0,
    activeTrackID: state.session.activeTrackID,
    activeCellBeat: state.session.activeCellBeat,
    mapping: (note: number) =>
      getInstrumentMapping(state, state.session.activeTrackID, note),
    sample: (note: number) =>
      getSample(state, state.session.activeTrackID, note)
  }
}

const NoteSelectorWithConnect = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { changeCellNote, listenCellNote }
)(NoteSelectorMemoized)

export default NoteSelectorWithConnect
