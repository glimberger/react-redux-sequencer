// @flow strict
import * as React from "react"

import Key from "./Key"
import styles from "./NoteSelector.module.css"
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

class NoteSelector extends React.Component<Props, State> {
  state = {
    noteOnHover: null
  }

  // used to compute the width of a black key
  widthRatio = 0.75

  render() {
    const {
      height,
      keyWidth,
      color,
      activeNote,
      activeTrackID,
      activeCellBeat,
      changeCellNote
    } = this.props

    if (activeTrackID === null || activeCellBeat === null) return null

    const css = {
      Keys: {
        height: `${height}px`
      },
      Info: {
        marginBottom: `${keyWidth}px`
      },
      BlackKey: {
        marginBottom: `${height * 0.4}px`,
        marginLeft: `-${(keyWidth * this.widthRatio) / 2.0}px`,
        marginRight: `-${(keyWidth * this.widthRatio) / 2.0}px`,
        zIndex: 10
      }
    }

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
      <div className={styles.Main}>
        {this.state.noteOnHover !== null ? (
          <div style={css.Info} className={styles.Info}>
            <div style={{ width: "10%" }}>
              <div>
                <span style={{ fontWeight: "lighter" }}>NOTE</span> {note} (
                {this.state.noteOnHover})
              </div>
            </div>
            <div style={{ width: "10%", marginLeft: `${keyWidth}px` }}>
              <span style={{ fontWeight: "lighter" }}>DETUNE</span> {detune}{" "}
              cent
            </div>
            <div style={{ width: "20%", marginLeft: `${keyWidth}px` }}>
              <span style={{ fontWeight: "lighter" }}>SAMPLE</span> {filename}
            </div>
          </div>
        ) : (
          <div style={{ opacity: 0, marginBottom: `${keyWidth}px` }}>
            NOTE SAMPLE
          </div>
        )}

        <div style={css.Keys} className={styles.Keys}>
          {[...Array(128).keys()].map(midiNote => {
            const blackKey = [1, 3, 6, 8, 10].includes(midiNote % 12)

            return (
              <div key={midiNote} style={blackKey ? css.BlackKey : {}}>
                <Key
                  active={midiNote === activeNote}
                  midiNote={midiNote}
                  width={blackKey ? keyWidth * this.widthRatio : keyWidth}
                  color={color}
                  black={blackKey}
                  onClick={() =>
                    changeCellNote(midiNote, activeCellBeat, activeTrackID)
                  }
                  onHoverStart={() => {
                    this.props.listenCellNote(
                      midiNote,
                      activeCellBeat,
                      activeTrackID
                    )
                    this.setState({ noteOnHover: midiNote })
                  }}
                  onHoverStop={() => this.setState({ noteOnHover: null })}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default NoteSelector
