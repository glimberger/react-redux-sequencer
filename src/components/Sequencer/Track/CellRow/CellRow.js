// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import CellWithConnect from "./Cell/CellWithConnect"

export type Props = {
  trackID: string,
  size: number,
  gutter: number
}

const StyledCellRow = styled.div`
  display: flex;
`

const CellRow = React.memo<Props>(function CellRow({
  trackID,
  size,
  gutter
}: Props) {
  return (
    <StyledCellRow>
      {Array.from(Array(64).keys()).map(beat => {
        return (
          <CellWithConnect
            key={`beat_${beat}`}
            trackID={trackID}
            beatNumber={beat}
            size={size}
            gutter={gutter}
          />
        )
      })}
    </StyledCellRow>
  )
})

export default CellRow
