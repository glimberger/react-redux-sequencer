// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TrackHeaderWithConnect from "./TrackHeader/TrackHeaderWithConnect"
import CellRow from "./CellRow/CellRow"
import TrackPanel from "./TrackPanel/TrackPanel"

import type { Session } from "../../../redux/store/session/types"

type StateProps = {
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type OwnProps = {
  trackID: string,
  panelWidth: number,
  panelHeight: number,
  gutter: number,
  cellSize: number
}

type Props = StateProps & OwnProps

const HeaderContainer = styled.div`
  display: flex;
`

const PanelContainer = styled.div`
  margin-top: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

function Track({
  activeTrackID,
  trackID,
  panelWidth,
  panelHeight,
  gutter,
  cellSize
}: Props) {
  return (
    <div id={`track_${trackID}`}>
      <HeaderContainer>
        <TrackHeaderWithConnect
          trackID={trackID}
          width={panelWidth}
          height={cellSize}
          gutter={gutter}
        />
        <Gutter gutter={gutter}> </Gutter>
        <CellRow trackID={trackID} size={cellSize} gutter={gutter} />
      </HeaderContainer>

      {trackID === activeTrackID && (
        <PanelContainer gutter={gutter}>
          <TrackPanel
            headerWidth={panelWidth}
            height={panelHeight}
            gutter={gutter}
            cellSize={cellSize}
          />
        </PanelContainer>
      )}
    </div>
  )
}

export default Track
