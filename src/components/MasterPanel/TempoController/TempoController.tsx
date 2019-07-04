import * as React from "react"
import { connect } from "react-redux"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import ValueController from "../../controllers/ValueController/ValueController"
import { changeTempo } from "../../../redux/actions/session/creators"

import { MaterialColor } from "../../../utils/color/colorLibrary"
import { Dispatch } from "redux"
import { Action } from "../../../redux/actions/session/interfaces"
import { IAppState } from "../../../redux/store/configureStore"

interface IOwnProps {
    color: MaterialColor
}

interface IProps extends IOwnProps {
    tempo: number
    onChange: (value: number) => void
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export function TempoController({ color, tempo, onChange }: IProps) {
    return (
        <StyledContainer>
            <ValueController
                value={tempo}
                onChange={onChange}
                amount={2}
                min={20}
                max={200}
                prefs={{ color }}
            />
        </StyledContainer>
    )
}

const mapStateToProps = (state: IAppState) => ({ tempo: state.session.tempo })

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onChange(value: number) {
            dispatch(changeTempo(value))
        }
    }
}

const TempoControllerConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(TempoController)

export default TempoControllerConnected
