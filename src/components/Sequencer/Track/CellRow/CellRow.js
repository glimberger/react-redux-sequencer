// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import CellWithConnect from "./Cell/CellWithConnect"
import { PrefsContext } from "../../Prefs/PrefsContext"

export type Props = {
  trackID: string
}

const StyledCellRow = styled.div`
  display: flex;
`

const CellRow = React.memo<Props>(function CellRow({ trackID }: Props) {
  const prefs = React.useContext(PrefsContext)

  return (
    <StyledCellRow>
      {Array.from(Array(64).keys()).map(beat => {
        return (
          <CellWithConnect
            key={`beat_${beat}`}
            trackID={trackID}
            beatNumber={beat}
            gutter={prefs.gutter}
          />
        )
      })}
    </StyledCellRow>
  )
})

export default CellRow
