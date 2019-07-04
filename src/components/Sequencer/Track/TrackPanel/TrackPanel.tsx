import React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import CellSettings from "./CellSettings/CellSettings"
import { usePrefs } from "../../../context/sequencer-prefs"
import TrackSettings from "./TrackSettings/TrackSettings"

const StyledTrackPanel = styled.div<{ gutter: number }>`
  display: flex;
  margin-bottom: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div<{ gutter: number }>`
  margin-left: ${({ gutter }) => gutter}px;
`

const TrackPanelMemo = React.memo(function TrackPanel() {
  const { gutter } = usePrefs()

  return (
    <StyledTrackPanel gutter={gutter}>
      <TrackSettings />
      <Gutter gutter={gutter}> </Gutter>
      <CellSettings />
    </StyledTrackPanel>
  )
})

export default TrackPanelMemo
