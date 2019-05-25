// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TrackHeaderWithConnect from "./TrackHeader/TrackHeaderWithConnect"
import CellRow from "./CellRow/CellRow"
import TrackPanel from "./TrackPanel/TrackPanel"
import { PrefsContext } from "../Prefs/PrefsContext"

import type { Session } from "../../../redux/store/session/types"

type StateProps = {
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type OwnProps = {
  trackID: string
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

const Track = React.memo<Props>(function Track({
  activeTrackID,
  trackID
}: Props) {
  const prefs = React.useContext(PrefsContext)

  return (
    <div id={`track_${trackID}`}>
      <HeaderContainer>
        <TrackHeaderWithConnect trackID={trackID} />
        <Gutter gutter={prefs.gutter}> </Gutter>
        <CellRow trackID={trackID} />
      </HeaderContainer>

      {trackID === activeTrackID && (
        <PanelContainer gutter={prefs.gutter}>
          <TrackPanel
            headerWidth={prefs.panelWidth}
            height={prefs.panelHeight}
            gutter={prefs.gutter}
            cellSize={prefs.cellSize}
          />
        </PanelContainer>
      )}
    </div>
  )
})

export default Track
