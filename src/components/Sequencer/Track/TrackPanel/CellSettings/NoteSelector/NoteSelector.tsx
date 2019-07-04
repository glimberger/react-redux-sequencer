import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import Key from "./Key"
import MidiConverter from "../../../../../../utils/audio/MidiConverter"
import Color, {
  MaterialColor
} from "../../../../../../utils/color/colorLibrary"
import {
  getActiveCell,
  getActiveTrack,
  getInstrumentMapping,
  getSample
} from "../../../../../../redux/reducers"
import { changeCellNote } from "../../../../../../redux/actions/session/creators"
import { listenCellNote } from "../../../../../../redux/actions/audio/creators"

import { ISample } from "../../../../../../redux/store/sample/interfaces"
import { IInstrumentMapping } from "../../../../../../redux/store/instrument/interfaces"
import { IAppState } from "../../../../../../redux/store/configureStore"

interface IOwnProps {
  height: number
  keyWidth: number
}

interface IProps extends IOwnProps {
  color: MaterialColor
  activeNote: number
  activeTrackID: string | null
  activeCellBeat: number | null
  mapping: (note: number) => IInstrumentMapping | null
  sample: (note: number) => ISample | null
  changeCellNote: (note: number, beat: number, TrackID: string) => void
  listenCellNote: (note: number, beat: number, trackID: string) => void
}

const StyledSelector = styled.div<{ color: MaterialColor }>`
  background-color: ${({ color }) => Color.get800Dark(color)};
  color: ${({ color }) => Color.get100(color)};
  font-size: 13px;
`

const Info = styled.div<{ keyWidth: number }>`
  display: flex;
  margin-bottom: ${({ keyWidth }) => keyWidth}px;
`

const InfoItem = styled.div<{ itemWidth: string; keyWidth: number }>`
  width: ${({ itemWidth }) => itemWidth || "10%"};
  margin-left: ${({ keyWidth }) => keyWidth || 0}px;
`

const Keys = styled.div<{ height: number }>`
  display: flex;
  height: ${({ height }) => height}px;
`

const KeyWrapper = styled.div<{
  blackKey: boolean
  height: number
  keyWidth: number
  ratio: number
}>`
  margin-bottom: ${({ blackKey, height }) => (blackKey ? height * 0.4 : 0)}px;
  margin-left: ${({ blackKey, keyWidth, ratio }) =>
    blackKey ? -(keyWidth * ratio) / 2.0 : 0}px;
  margin-right: ${({ blackKey, keyWidth, ratio }) =>
    blackKey ? -(keyWidth * ratio) / 2.0 : 0}px;
  z-index: ${({ blackKey }) => (blackKey ? 10 : 1)};
`

// used to compute the width of a black key
const widthRatio = 0.75

export function NoteSelector(props: IProps) {
  const [noteOnHover, setNoteOnHover] = React.useState<number | null>(null)

  if (props.activeTrackID === null || props.activeCellBeat === null) {
    return <div />
  }

  const fileName = (note: number | null): string => {
    if (note == null) {
      return ""
    }

    const sample = props.sample(note)

    if (sample === null) {
      return "-"
    }

    return sample.label
  }

  const detune = (note: number | null): string => {
    if (note == null) {
      return ""
    }

    const mapping = props.mapping(note)

    if (mapping === null) {
      return "-"
    }

    return mapping.detune + " cent"
  }

  return (
    <StyledSelector color={props.color}>
      {noteOnHover !== null ? (
        <Info keyWidth={props.keyWidth}>
          <InfoItem itemWidth={"10%"} keyWidth={props.keyWidth}>
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
              ratio={widthRatio}
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
                  ) {
                    return
                  }

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
                  ) {
                    return
                  }
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

export const NoteSelectorMemoized = React.memo<IProps>(NoteSelector)

const mapStateToProps = (state: IAppState) => {
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

const NoteSelectorWithConnect = connect(
  mapStateToProps,
  { changeCellNote, listenCellNote }
)(NoteSelectorMemoized)

export default NoteSelectorWithConnect
