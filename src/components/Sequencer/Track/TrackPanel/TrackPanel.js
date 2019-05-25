// @flow strict
import React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TrackSettingsWithConnect from "./TrackSettings/TrackSettingsWithConnect"
import CellSettingsWithConnect from "./CellSettings/CellSettingsWithConnect"
import { PrefsContext } from "../../Prefs/PrefsContext"

const StyledTrackPanel = styled.div`
  display: flex;
  margin-bottom: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

const TrackPanel = React.memo<{}>(function TrackPanel() {
  const prefs = React.useContext(PrefsContext)

  return (
    <StyledTrackPanel gutter={prefs.gutter}>
      <TrackSettingsWithConnect />
      <Gutter gutter={prefs.gutter}> </Gutter>
      <CellSettingsWithConnect />
    </StyledTrackPanel>
  )
})

export default TrackPanel
