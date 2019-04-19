// @flow strict
import * as React from "react"

import Cell from "../Cell/Cell"
import CellPanel from "../CellPanel/CellPanel"
import TrackTitle from "../TrackTitle/TrackTitle"
import TrackPanel from "../TrackPanel/TrackPanel"
import { getOrderedTracks } from "../../redux/reducers/session"
import AddTrack from "../AddTrack/AddTrack"
import styles from "./Matrix.module.css"

import type { AudioState } from "../../redux/store/audio/types"
import type { NoteResolution, Session } from "../../redux/store/session/types"

type StateProps = {|
  audioState: AudioState,
  sessionState: Session
|}

type DispatchProps = {|
  onToggleScheduleCell: (beat: number, trackID: string) => void,
  onGainChange: (trackID: string, gain: number) => void,
  onToggleCellPanel: (beat: number, trackID: string) => void,
  onMuteClick: (trackID: string) => void,
  onSoloClick: (trackID: string) => void,
  onTrackClick: (trackID: string) => void,
  onNoteResolutionChange: (resolution: NoteResolution, trackID: string) => void
|}

type Props = {|
  ...StateProps,
  ...DispatchProps
|}

const prefs = {
  cellSize: 36,
  panel: {
    width: 300,
    height: 300,
    transitionDuration: 300
  }
}

function Matrix({
  onToggleCellPanel,
  onTrackClick,
  onNoteResolutionChange,
  onMuteClick,
  onSoloClick,
  audioState,
  onToggleScheduleCell,
  onGainChange,
  sessionState
}: Props) {
  const {
    mutes,
    solos,
    currentBeat,
    currentTrackPanel,
    currentCellPanel,
    mode
  } = audioState
  const { matrix } = sessionState

  const handleCellClick = (beat: number, trackID: string) => {
    if (mode === "PLAY") {
      onToggleScheduleCell(beat, trackID)
    }

    if (mode === "EDIT") {
      onToggleCellPanel(beat, trackID)
    }
  }

  const handleTitleClick = (trackID: string) => {
    if (mode === "EDIT") {
      onTrackClick(trackID)
    }
  }

  return (
    <React.Fragment>
      {getOrderedTracks(sessionState).map(
        ({ id, label, color, processing, noteResolution }, idx) => {
          return (
            <div
              key={id}
              className={idx === 0 ? styles.RowWrapperFirst : styles.RowWrapper}
            >
              <div className={styles.Row}>
                <div className={styles.Track}>
                  <TrackTitle
                    prefs={{
                      color,
                      width: prefs.panel.width,
                      height: prefs.cellSize
                    }}
                    label={label}
                    muted={mutes[id] ? mutes[id].enabled : false}
                    trackID={id}
                    onMuteClick={onMuteClick}
                    soloed={solos[id] ? solos[id].enabled : false}
                    onSoloClick={onSoloClick}
                    gain={processing.gain.gain}
                    onTitleClick={handleTitleClick}
                  />
                  <TrackPanel
                    prefs={{
                      color,
                      width: prefs.panel.width,
                      height: prefs.panel.height,
                      transitionDuration: prefs.panel.transitionDuration
                    }}
                    trackID={id}
                    processing={processing}
                    currentTrackPanel={currentTrackPanel}
                    noteResolution={noteResolution}
                    onResolutionChange={onNoteResolutionChange}
                    onGainChange={onGainChange}
                  />
                </div>

                <div>
                  <div className={styles.Row}>
                    {matrix[id].map(({ scheduled, note }, beat) => {
                      if (beat % noteResolution) return null

                      return (
                        <div
                          key={`beat_${beat}`}
                          className={`${styles.CellColumn}`}
                        >
                          <Cell
                            color={color}
                            size={prefs.cellSize}
                            played={
                              noteResolution === 1
                                ? currentBeat === beat
                                : noteResolution === 2
                                ? currentBeat === beat ||
                                  currentBeat - 1 === beat
                                : noteResolution === 4
                                ? currentBeat === beat ||
                                  currentBeat - 1 === beat ||
                                  currentBeat - 2 === beat ||
                                  currentBeat - 3 === beat
                                : false
                            }
                            scheduled={scheduled}
                            edited={
                              currentCellPanel
                                ? currentCellPanel.beat === beat &&
                                  currentCellPanel.trackID === id
                                : false
                            }
                            noteResolution={noteResolution}
                            onClick={() => handleCellClick(beat, id)}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <CellPanel
                    prefs={{
                      height: prefs.panel.height,
                      transitionDuration: prefs.panel.transitionDuration
                    }}
                    color={color}
                    currentCellPanel={audioState.currentCellPanel}
                    currentBeat={currentBeat}
                    cell={
                      currentCellPanel
                        ? matrix[id][currentCellPanel.beat]
                        : null
                    }
                    trackID={id}
                    onCellClick={onToggleScheduleCell}
                  />
                </div>
              </div>
            </div>
          )
        }
      )}
      <div className={styles.RowWrapper}>
        <div className={styles.Row}>
          <AddTrack
            prefs={{
              color: "grey",
              width: prefs.panel.width,
              height: prefs.cellSize
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Matrix
