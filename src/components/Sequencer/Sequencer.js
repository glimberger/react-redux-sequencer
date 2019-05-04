// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import AddTrack from "./AddTrack/AddTrack"
import TrackWithConnect from "./Track/TrackWithConnect"

import type { Track as TrackType } from "../../redux/store/session/types"

type StateProps = {|
  orderedTracks: Array<TrackType>
|}

type OwnProps = {}

type Props = StateProps & OwnProps

const prefs = {
  cellSize: 36,
  gutter: 6,
  panel: {
    width: 280,
    height: 300,
    transitionDuration: 300
  }
}

const Row = styled.div`
  margin-top: ${({ first, gutter }) => (first ? 0 : gutter)}px;
`

const AddTrackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

function Sequencer({ orderedTracks }: Props) {
  return (
    <React.Fragment>
      {orderedTracks.map((track, idx) => (
        <Row key={track.id} gutter={prefs.gutter} first={idx === 0}>
          <TrackWithConnect
            trackID={track.id}
            panelWidth={prefs.panel.width}
            panelHeight={prefs.panel.height}
            gutter={prefs.gutter}
            cellSize={prefs.cellSize}
          />
        </Row>
      ))}
      <Row gutter={prefs.gutter} first={false}>
        <AddTrackWrapper>
          <AddTrack
            prefs={{
              color: "grey",
              width: prefs.panel.width,
              height: prefs.cellSize
            }}
          />
        </AddTrackWrapper>
      </Row>
    </React.Fragment>
  )
}

export default Sequencer
