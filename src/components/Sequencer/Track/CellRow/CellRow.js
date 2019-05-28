// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Cell from "./Cell/Cell"
import { usePrefs } from "../../../context/sequencer-prefs"

export type Props = {|
  trackID: string
|}

const StyledCellRow = styled.div`
  display: flex;
`

const CellRow = React.memo<Props>(function CellRow({ trackID }: Props) {
  const { gutter } = usePrefs()

  return (
    <StyledCellRow>
      {Array.from(Array(64).keys()).map(beat => {
        return (
          <Cell
            key={`beat_${beat}`}
            trackID={trackID}
            beatNumber={beat}
            gutter={gutter}
          />
        )
      })}
    </StyledCellRow>
  )
})

export default CellRow
