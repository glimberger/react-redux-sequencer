import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import { usePrefs } from "../context/sequencer-prefs"
import AddTrack from "./AddTrack/AddTrack"
import Track from "./Track/Track"
import Color from "../../utils/color/colorLibrary"
import { connect } from "react-redux"
import { IAppState } from "../../redux/store/configureStore"

interface IProps {
  trackOrder: string[]
}

const StyledSequencer = styled.div<{
  panelWidth: number
  cellSize: number
  gutter: number
}>`
  background-color: transparent;
  background-image: ${({ panelWidth, cellSize, gutter }) => `linear-gradient(
    90deg,
    transparent ${panelWidth + gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${panelWidth + gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${panelWidth + gutter / 2.0 + 1}px,
    transparent ${panelWidth + gutter / 2.0 + 1}px
  ),
  linear-gradient(
    90deg,
    transparent ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter)}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter)}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter)}px,
    transparent ${panelWidth + gutter / 2.0 + 1 + (8 * cellSize + 8 * gutter)}px
  ),
  linear-gradient(
    90deg,
    transparent ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 2}px,
    transparent ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 2}px
  ),
  linear-gradient(
    90deg,
    transparent ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 3}px,
    transparent ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 3}px
  ),
  linear-gradient(
    90deg,
    transparent ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 -
      1 +
      (8 * cellSize + 8 * gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 4}px,
    transparent ${panelWidth +
      gutter / 2.0 +
      1 +
      (8 * cellSize + 8 * gutter) * 4}px
  )
  `};

  background-size: 100%;
`

const Row = styled.div<{ first: boolean; gutter: number }>`
  margin-top: ${({ first, gutter }) => (first ? 0 : gutter)}px;
`

const AddTrackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export function Sequencer({ trackOrder }: IProps) {
  const { panelWidth, cellSize, gutter } = usePrefs()

  return (
    <div>
      <StyledSequencer
        panelWidth={panelWidth}
        cellSize={cellSize}
        gutter={gutter}
      >
        {trackOrder.map((trackID, idx) => (
          <Row key={trackID} gutter={gutter} first={idx === 0}>
            <Track trackID={trackID} />
          </Row>
        ))}
      </StyledSequencer>
      <Row gutter={gutter} first={false}>
        <AddTrackWrapper>
          <AddTrack color={Color.BLUE_GREY} />
        </AddTrackWrapper>
      </Row>
    </div>
  )
}

const mapStateToProps = (state: IAppState) => ({
  trackOrder: state.session.trackOrder
})

const SequencerConnected = connect(mapStateToProps)(Sequencer)

export default SequencerConnected
