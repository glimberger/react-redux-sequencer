// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import { PrefsContext } from "./Prefs/PrefsContext"
import AddTrack from "./AddTrack/AddTrack"
import TrackWithConnect from "./Track/TrackWithConnect"
import Color from "../../utils/color/colorLibrary"

type StateProps = {|
  trackOrder: Array<string>
|}

type Props = StateProps

const StyledSequencer = styled.div`
  background-color: transparent;
  background-image: ${({ prefs }) => `linear-gradient(
    90deg,
    transparent ${prefs.panelWidth + prefs.gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth + prefs.gutter / 2.0 - 1}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth + prefs.gutter / 2.0 + 1}px,
    transparent ${prefs.panelWidth + prefs.gutter / 2.0 + 1}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter)}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 2}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 3}px
  ),
  linear-gradient(
    90deg,
    transparent ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 -
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    rgba(255, 255, 255, 0.2) ${prefs.panelWidth +
      prefs.gutter / 2.0 +
      1 +
      (8 * prefs.cellSize + 8 * prefs.gutter) * 4}px,
    transparent ${prefs.panelWidth +
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
  const prefs = React.useContext(PrefsContext)

  return (
    <div>
      <StyledSequencer prefs={prefs}>
        {trackOrder.map((trackID, idx) => (
          <Row key={trackID} gutter={prefs.gutter} first={idx === 0}>
            <TrackWithConnect
              trackID={trackID}
            />
          </Row>
        ))}
      </StyledSequencer>
      <Row gutter={prefs.gutter} first={false}>
        <AddTrackWrapper>
          <AddTrack
            color={Color.BLUE_GREY}
            width={prefs.panelWidth}
            height={prefs.cellSize}
            gutter={prefs.gutter}
          />
        </AddTrackWrapper>
      </Row>
    </div>
  )
}

export default Sequencer
