// @flow strict
import React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TrackSettingsWithConnect from "./TrackSettings/TrackSettingsWithConnect"
import CellSettingsWithConnect from "./CellSettings/CellSettingsWithConnect"
import { usePrefs } from "../../Prefs/PrefsContext"

const StyledTrackPanel = styled.div`
  display: flex;
  margin-bottom: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

const TrackPanel = React.memo<{}>(function TrackPanel() {
  const { gutter } = usePrefs()

  return (
    <StyledTrackPanel gutter={gutter}>
      <TrackSettingsWithConnect />
      <Gutter gutter={gutter}> </Gutter>
      <CellSettingsWithConnect />
    </StyledTrackPanel>
  )
})

export default TrackPanel
