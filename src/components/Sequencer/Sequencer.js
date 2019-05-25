// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import AddTrack from "./AddTrack/AddTrack"
import TrackWithConnect from "./Track/TrackWithConnect"
import Color from "../../utils/color/colorLibrary"

type StateProps = {|
  trackOrder: Array<string>
|}

type Props = StateProps

const prefs = {
  cellSize: 36,
  gutter: 6,
  panel: {
    width: 280,
    height: 300,
    transitionDuration: 300
  }
}

const StyledSequencer = styled.div`
  background-color: transparent;
  background-image: ${({ prefs }) => `linear-gradient(
    90deg,
    transparent ${prefs.panel.width + prefs.gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width + prefs.gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width + prefs.gutter / 2.0 + 1}px,
    transparent ${prefs.panel.width + prefs.gutter / 2.0 + 1}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    transparent ${prefs.panel.width +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px
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
  return (
    <div>
      <StyledSequencer prefs={prefs}>
        {trackOrder.map((trackID, idx) => (
          <Row key={trackID} gutter={prefs.gutter} first={idx === 0}>
            <TrackWithConnect
              trackID={trackID}
              panelWidth={prefs.panel.width}
              panelHeight={prefs.panel.height}
              gutter={prefs.gutter}
              cellSize={prefs.cellSize}
            />
          </Row>
        ))}
      </StyledSequencer>
      <Row gutter={prefs.gutter} first={false}>
        <AddTrackWrapper>
          <AddTrack
            color={Color.BLUE_GREY}
            width={prefs.panel.width}
            height={prefs.cellSize}
            gutter={prefs.gutter}
          />
        </AddTrackWrapper>
      </Row>
    </div>
  )
}

export default Sequencer
