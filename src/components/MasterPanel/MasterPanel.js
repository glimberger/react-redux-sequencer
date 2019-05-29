// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import TempoController from "./TempoController/TempoController"
import Color from "../../utils/color/colorLibrary"
import Transport from "./Transport/Transport"
import MasterGainController from "./MasterGainController/MasterGainController"

const StyledContainer = styled.div`
  height: 4rem;
  display: flex;
  background-color: ${({ color }) => Color.get600(color)};
`

const StyledItem = styled.div`
  margin: auto 1rem;
`

function MasterPanel() {
  return (
    <div>
      <StyledContainer color={Color.BLUE_GREY}>
        <div>
          <Transport color={Color.BLUE_GREY} />
        </div>
        <StyledItem>
          <MasterGainController color={Color.BLUE_GREY} />
        </StyledItem>
        <StyledItem>
          <TempoController color={Color.BLUE_GREY} />
        </StyledItem>
      </StyledContainer>
    </div>
  )
}

export default MasterPanel
