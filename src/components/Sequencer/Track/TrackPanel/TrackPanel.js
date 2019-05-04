// @flow strict
import React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TrackSettingsWithConnect from "./TrackSettings/TrackSettingsWithConnect"

import CellSettingsWithConnect from "./CellSettings/CellSettingsWithConnect"

type Props = {
  headerWidth: number,
  height: number,
  gutter: number,
  cellSize: number
}

const StyledTrackPanel = styled.div`
  display: flex;
  margin-bottom: ${({ gutter }) => gutter}px;
`

const Gutter = styled.div`
  margin-left: ${({ gutter }) => gutter}px;
`

function TrackPanel({ headerWidth, height, gutter, cellSize }: Props) {
  return (
    <StyledTrackPanel gutter={gutter}>
      <TrackSettingsWithConnect
        width={headerWidth}
        height={height}
        gutter={gutter}
      />
      <Gutter gutter={gutter}> </Gutter>
      <CellSettingsWithConnect
        cellSize={cellSize}
        gutter={gutter}
        height={height}
      />
    </StyledTrackPanel>
  )
}

export default TrackPanel
