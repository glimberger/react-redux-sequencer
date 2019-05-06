// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../utils/color/colorLibrary"
import ResolutionSwitchWithConnect from "./ResolutionSwitch/ResolutionSwitchWithConnect"
import VerticalFaderWithConnect from "./FaderWithConnect"

import type { Track } from "../../../../../redux/store/session/types"

type OwnProps = {
  width: number,
  height: number,
  gutter: number
}

type StateProps = {
  color: $PropertyType<Track, "color">,
  isTrackActive: boolean
}

type Props = OwnProps & StateProps

const StyledSettings = styled.div`
  border-radius: 3px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => Color.get900Dark(color)};
`

const InnerWrapper = styled.div`
  display: flex;
  height: 100%;
`

const AsideSection = styled.section`
  padding: ${({ gutter }) => 2 * gutter}px;
`

const MainSection = styled.section`
  width: 100%;
`

const ResolutionSwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ gutter }) => 2 * gutter}px;
`

function TrackSettings({ width, height, gutter, color, isTrackActive }: Props) {
  if (!isTrackActive) return <div />

  return (
    <StyledSettings width={width} height={height} color={color}>
      <InnerWrapper>
        <AsideSection gutter={gutter}>
          <VerticalFaderWithConnect
            width={40}
            height={height - 4 * gutter}
            color={color}
            fontSize={9}
          />
        </AsideSection>
        <MainSection width={width} gutter={gutter}>
          <ResolutionSwitchWrapper gutter={gutter}>
            <ResolutionSwitchWithConnect gutter={gutter} />
          </ResolutionSwitchWrapper>
          <div />
        </MainSection>
      </InnerWrapper>
    </StyledSettings>
  )
}

export default TrackSettings
