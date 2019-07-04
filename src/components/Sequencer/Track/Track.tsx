import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import TrackHeader from "./TrackHeader/TrackHeader"
import CellRow from "./CellRow/CellRow"
import TrackPanel from "./TrackPanel/TrackPanel"
import { usePrefs } from "../../context/sequencer-prefs"

import { IAppState } from "../../../redux/store/configureStore"

interface IOwnProps {
  trackID: string
}

interface IProps extends IOwnProps {
  activeTrackID: string | null
}

const HeaderContainer = styled.div`
  display: flex;
`

const PanelContainer = styled.div<{ gutter: number }>`
  margin-top: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div<{ gutter: number }>`
  margin-left: ${({ gutter }) => gutter}px;
`

export function Track(props: IProps) {
  const { gutter } = usePrefs()

  return (
    <div id={`track_${props.trackID}`}>
      <HeaderContainer>
        <TrackHeader trackID={props.trackID} />
        <Gutter gutter={gutter}> </Gutter>
        <CellRow trackID={props.trackID} />
      </HeaderContainer>

      {props.trackID === props.activeTrackID && (
        <PanelContainer gutter={gutter}>
          <TrackPanel />
        </PanelContainer>
      )}
    </div>
  )
}

const TrackMemoized = React.memo<IProps>(Track)

const mapStateToProps = (state: IAppState) => {
  return {
    activeTrackID: state.session.activeTrackID
  }
}

const TrackWithConnect = connect(mapStateToProps)(TrackMemoized)

export default TrackWithConnect
