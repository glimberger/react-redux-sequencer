import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import Controller from "../../controllers/Fader/Fader"
import Volume from "../../../audio/utils/Volume/Volume"
import Color, { MaterialColor } from "../../../utils/color/colorLibrary"
import { changeMasterGain } from "../../../redux/actions/session/creators"
import { IAppState } from "../../../redux/store/configureStore"

interface IOwnProps {
    color: MaterialColor
}

interface IProps extends IOwnProps {
    gain: number
    changeMasterGain: (gain: number) => void
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const StyledIndicator = styled.span<{ color: MaterialColor }>`
    margin-left: 0.5rem;
    width: 4rem;
    text-align: end;
    user-select: none;
    color: ${({ color }) => Color.get50(color)};
`

export function MasterGainController(props: IProps) {
    const handleGainChange = (e: React.ChangeEvent<any>) => {
        props.changeMasterGain(parseFloat(e.target.value))
    }

    return (
        <StyledContainer>
            <Controller
                orientation="horizontal"
                color={props.color}
                size={140}
                value={props.gain}
                onChange={handleGainChange}
                max={1}
                min={0}
                step={0.001}
            />
            <StyledIndicator color={props.color}>
                {Volume.toDBString(props.gain)}
            </StyledIndicator>
        </StyledContainer>
    )
}

const mapStateToProps = (state: IAppState) => ({
    gain: state.session.masterGain
})

const MasterGainControllerConnected = connect(
    mapStateToProps,
    { changeMasterGain }
)(MasterGainController)

export default MasterGainControllerConnected
