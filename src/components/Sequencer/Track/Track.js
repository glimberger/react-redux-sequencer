// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"
import { connect } from "react-redux"

import TrackHeader from "./TrackHeader/TrackHeader"
import CellRow from "./CellRow/CellRow"
import TrackPanel from "./TrackPanel/TrackPanel"
import { usePrefs } from "../../context/sequencer-prefs"

import type { Session } from "../../../redux/store/session/types"
import type { AppState } from "../../../redux/store/configureStore"

type OwnProps = {|
  trackID: string
|}

type Props = {
  ...OwnProps,
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

const HeaderContainer = styled.div`
  display: flex;
`

const PanelContainer = styled.div`
  margin-top: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

export function Track(props: Props) {
  const { panelWidth, panelHeight, cellSize, gutter } = usePrefs()

  return (
    <div id={`track_${props.trackID}`}>
      <HeaderContainer>
        <TrackHeader trackID={props.trackID} />
        <Gutter gutter={gutter}> </Gutter>
        <CellRow trackID={props.trackID} />
      </HeaderContainer>

      {props.trackID === props.activeTrackID && (
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

const TrackMemoized = React.memo<Props>(Track)

const mapStateToProps = (state: AppState) => {
  return {
    activeTrackID: state.session.activeTrackID
  }
}

const TrackWithConnect = connect<Props, OwnProps, _, _, _, _>(mapStateToProps)(
  TrackMemoized
)

export default TrackWithConnect
