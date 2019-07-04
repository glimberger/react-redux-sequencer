import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import MasterPanel from "../../MasterPanel/MasterPanel"
import Sequencer from "../../Sequencer/Sequencer"
import { PrefsProvider } from "../../context/sequencer-prefs"
import AudioEngine from "../../AudioEngine/AudioEngine"

const StyledContainer = styled.div`
    padding-top: 3rem;
`

const StyledSection = styled.div`
    margin: 1rem;
`

function SessionPage() {
    return (
        <StyledContainer>
            <MasterPanel />
            <StyledSection>
                <PrefsProvider>
                    <Sequencer />
                    <AudioEngine />
                </PrefsProvider>
            </StyledSection>
        </StyledContainer>
    )
}

export default SessionPage
