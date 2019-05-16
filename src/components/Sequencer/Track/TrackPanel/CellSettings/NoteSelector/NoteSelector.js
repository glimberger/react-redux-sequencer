// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Key from "./Key"
import MidiConverter from "../../../../../../utils/audio/MidiConverter"

import type {
  Cell,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import type { Sample } from "../../../../../../redux/store/sample/types"

type OwnProps = {
  height: number,
  keyWidth: number
}

type StateProps = {
  color: $PropertyType<Track, "color">,
  activeNote: $PropertyType<Cell, "midi">,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  getMappingForNote: (note: number) => { sampleID: string, detune: number },
  getSample: (note: number) => Sample
}

type DispatchProps = {
  changeCellNote: (note: number, beat: number, TrackID: string) => void,
  listenCellNote: (note: number, beat: number, trackID: string) => void
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  +noteOnHover: number | null
}

const StyledSelector = styled.div`
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

class NoteSelector extends React.Component<Props, State> {
  state = {
    noteOnHover: null
  }

  // used to compute the width of a black key
  widthRatio = 0.75

  render() {
    if (this.props.activeTrackID === null || this.props.activeCellBeat === null)
      return null

    const note = MidiConverter.toNote(this.state.noteOnHover)

    const filename =
      this.state.noteOnHover !== null
        ? this.props.getSample(this.state.noteOnHover).label
        : ""

    const detune =
      this.state.noteOnHover !== null
        ? this.props.getMappingForNote(this.state.noteOnHover).detune
        : ""

    return (
      <StyledSelector>
        {this.state.noteOnHover !== null ? (
          <Info keyWidth={this.props.keyWidth}>
            <InfoItem itemWidth={"10%"}>
              <div>
                <span style={{ fontWeight: "lighter" }}>NOTE</span> {note} (
                {this.state.noteOnHover})
              </div>
            </InfoItem>
            <InfoItem keyWidth={this.props.keyWidth} itemWidth={"10%"}>
              <span style={{ fontWeight: "lighter" }}>DETUNE</span> {detune}{" "}
              cent
            </InfoItem>
            <InfoItem keyWidth={this.props.keyWidth} itemWidth={"30%"}>
              <span style={{ fontWeight: "lighter" }}>SAMPLE</span> {filename}
            </InfoItem>
          </Info>
        ) : (
          <Info keyWidth={this.props.keyWidth} style={{ opacity: 0 }}>
            <span role="img" aria-label="keyboard">
              🎹
            </span>
          </Info>
        )}

        <Keys height={this.props.height}>
          {[...Array(128).keys()].map(midiNote => {
            const blackKey = [1, 3, 6, 8, 10].includes(midiNote % 12)

            return (
              <KeyWrapper
                key={midiNote}
                blackKey={blackKey}
                keyWidth={this.props.keyWidth}
                height={this.props.height}
                widthRatio={this.widthRatio}
              >
                <Key
                  active={midiNote === this.props.activeNote}
                  midiNote={midiNote}
                  width={
                    blackKey
                      ? this.props.keyWidth * this.widthRatio
                      : this.props.keyWidth
                  }
                  color={this.props.color}
                  black={blackKey}
                  onClick={() => {
                    if (
                      this.props.activeTrackID === null ||
                      this.props.activeCellBeat === null
                    )
                      return

                    this.props.changeCellNote(
                      midiNote,
                      this.props.activeCellBeat,
                      this.props.activeTrackID
                    )
                  }}
                  onHoverStart={() => {
                    if (
                      this.props.activeTrackID === null ||
                      this.props.activeCellBeat === null
                    )
                      return

                    this.props.listenCellNote(
                      midiNote,
                      this.props.activeCellBeat,
                      this.props.activeTrackID
                    )
                    this.setState({ noteOnHover: midiNote })
                  }}
                  onHoverStop={() => this.setState({ noteOnHover: null })}
                />
              </KeyWrapper>
            )
          })}
        </Keys>
      </StyledSelector>
    )
  }
}

export default NoteSelector
