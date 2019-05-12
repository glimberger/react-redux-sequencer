// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Cell from "./Cell/Cell"
import { isCellPlayed } from "../../../../services/cell"

import type {
  Cell as CellType,
  Session,
  Track
} from "../../../../redux/store/session/types"
import type { AudioState } from "../../../../redux/store/audio/types"

type StateProps = {
  currentBeat: $PropertyType<AudioState, "currentBeat">,
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  activeTrackID: $PropertyType<Session, "activeTrackID">,
  activeCellBeat: $PropertyType<Session, "activeCellBeat">,
  cells: Array<CellType>
}

type DispatchProps = {
  scheduleTrackCell: (beat: number, trackID: string) => void,
  setActiveCell: (beat: number) => void
}

type OwnProps = {
  trackID: string,
  size: number,
  gutter: number
}

type Props = StateProps & DispatchProps & OwnProps

const StyledCellRow = styled.div`
  display: flex;
`

function CellRow({
  trackID,
  size,
  gutter,
  currentBeat,
  color,
  noteResolution,
  activeTrackID,
  activeCellBeat,
  cells,
  scheduleTrackCell,
  setActiveCell
}: Props) {
  return (
    <StyledCellRow>
      {cells.map(({ scheduled, note, processing }, beat) => {
        // we don't want to keep cells out of note resolution
        if (beat % noteResolution) return null

        return (
          <div key={`beat_${beat}`}>
            <Cell
              color={color}
              size={size}
              gutter={gutter}
              played={isCellPlayed(noteResolution, beat, currentBeat)}
              scheduled={scheduled}
              edited={trackID === activeTrackID && beat === activeCellBeat}
              noteResolution={noteResolution}
              processing={processing}
              onClick={() =>
                trackID === activeTrackID
                  ? setActiveCell(beat)
                  : scheduleTrackCell(beat, trackID)
              }
            />
          </div>
        )
      })}
    </StyledCellRow>
  )
}

export default CellRow
