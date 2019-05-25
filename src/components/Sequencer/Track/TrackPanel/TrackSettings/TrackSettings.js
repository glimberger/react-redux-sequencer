// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../../../utils/color/colorLibrary"
import ResolutionSwitchWithConnect from "./ResolutionSwitch/ResolutionSwitchWithConnect"
import VerticalFaderWithConnect from "./FaderWithConnect"

import type { Track } from "../../../../../redux/store/session/types"
import { PrefsContext } from '../../../Prefs/PrefsContext'

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

  const prefs = React.useContext(PrefsContext)

  return (
    <StyledSettings width={prefs.panelWidth} height={prefs.panelHeight} color={color}>
      <InnerWrapper>
        <AsideSection gutter={prefs.gutter}>
          <VerticalFaderWithConnect
            width={40}
            height={prefs.panelHeight - 4 * prefs.gutter}
            color={color}
            fontSize={9}
          />
        </AsideSection>
        <MainSection width={prefs.panelWidth} gutter={prefs.gutter}>
          <ResolutionSwitchWrapper gutter={prefs.gutter}>
            <ResolutionSwitchWithConnect gutter={prefs.gutter} />
          </ResolutionSwitchWrapper>
          <div />
        </MainSection>
      </InnerWrapper>
    </StyledSettings>
  )
}

export default TrackSettings
