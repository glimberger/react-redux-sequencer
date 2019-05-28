// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../utils/color/colorLibrary"
import ResolutionSwitch from "./ResolutionSwitch/ResolutionSwitch"
import VerticalFaderWithConnect from "./FaderWithConnect"
import { usePrefs } from "../../../../context/sequencer-prefs"

import type { Track } from "../../../../../redux/store/session/types"

type StateProps = {
  color: $PropertyType<Track, "color">,
  isTrackActive: boolean
}

type Props = StateProps

const StyledSettings = styled.div`
  border-radius: 3px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => Color.get800Dark(color)};
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

function TrackSettings({ color, isTrackActive }: Props) {
  if (!isTrackActive) return <div />

  const { panelWidth, panelHeight, gutter } = usePrefs()

  return (
    <StyledSettings width={panelWidth} height={panelHeight} color={color}>
      <InnerWrapper>
        <AsideSection gutter={gutter}>
          <VerticalFaderWithConnect
            width={40}
            height={panelHeight - 4 * gutter}
            color={color}
            fontSize={9}
          />
        </AsideSection>
        <MainSection width={panelWidth} gutter={gutter}>
          <ResolutionSwitchWrapper gutter={gutter}>
            <ResolutionSwitch />
          </ResolutionSwitchWrapper>
          <div />
        </MainSection>
      </InnerWrapper>
    </StyledSettings>
  )
}

export default TrackSettings
