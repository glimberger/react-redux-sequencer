// @flow strict
import React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import CellSettings from "./CellSettings/CellSettings"
import { usePrefs } from "../../../context/sequencer-prefs"
import TrackSettings from "./TrackSettings/TrackSettings"

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
      <TrackSettings />
      <Gutter gutter={gutter}> </Gutter>
      <CellSettings />
    </StyledTrackPanel>
  )
})

export default TrackPanel
