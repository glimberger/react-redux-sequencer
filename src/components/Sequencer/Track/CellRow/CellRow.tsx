import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Cell from "./Cell/Cell"
import { usePrefs } from "../../../context/sequencer-prefs"

interface IProps {
  trackID: string
}

const StyledCellRow = styled.div`
  display: flex;
`

const CellRowMemo = React.memo<IProps>(function CellRow({ trackID }: IProps) {
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

export default CellRowMemo
