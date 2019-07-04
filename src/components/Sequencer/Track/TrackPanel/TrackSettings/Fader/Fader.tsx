import * as React from "react"
import { connect } from "react-redux"

import { getActiveTrack } from "../../../../../../redux/reducers"
import { changeTrackGain } from "../../../../../../redux/actions/session/creators"
import VerticalFader from "../../../../../controllers/VerticalFader/VerticalFader"
import { MaterialColor } from "../../../../../../utils/color/colorLibrary"
import { IAppState } from "../../../../../../redux/store/configureStore"

interface IOwnProps {
  height: number
  width: number
  color: MaterialColor
  fontSize: number
}

interface IProps extends IOwnProps {
  value: number
  activeTrackID: string | null
  changeTrackGain: (trackId: string, gain: number) => void
}

export function Fader(props: IProps) {
  return (
    <VerticalFader
      width={props.width}
      height={props.height}
      color={props.color}
      fontSize={props.fontSize}
      value={props.value}
      onValueChange={(value: number) => {
        // tslint:disable-next-line:no-unused-expression
        if (!props.activeTrackID) {
          return
        }

        changeTrackGain(props.activeTrackID, value)
      }}
    />
  )
}

const mapStateToProps = (state: IAppState) => {
  const track = getActiveTrack(state)

  return {
    value: track ? track.processing.gain.gain : 1,
    activeTrackID: state.session.activeTrackID
  }
}

const VerticalFaderWithConnect = connect(
  mapStateToProps,
  { changeTrackGain }
)(Fader)

export default VerticalFaderWithConnect
