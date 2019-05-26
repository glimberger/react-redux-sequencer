// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import { usePrefs } from "./Prefs/PrefsContext"
import AddTrack from "./AddTrack/AddTrack"
import TrackWithConnect from "./Track/TrackWithConnect"
import Color from "../../utils/color/colorLibrary"

type StateProps = {|
  trackOrder: Array<string>
|}

type Props = StateProps

const StyledSequencer = styled.div`
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

const Row = styled.div`
  margin-top: ${({ first, gutter }) => (first ? 0 : gutter)}px;
`

const AddTrackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

function Sequencer({ trackOrder }: Props) {
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
            <TrackWithConnect trackID={trackID} />
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

export default Sequencer
