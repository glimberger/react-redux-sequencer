import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"
import { connect } from "react-redux"

import Volume from "../../../../audio/utils/Volume/Volume"
import MuteButton from "./MuteButton"
import SoloButton from "./SoloButton"
import TrackLabel from "./TrackLabel"
import { usePrefs } from "../../../context/sequencer-prefs"
import Color, { MaterialColor } from "../../../../utils/color/colorLibrary"
import { IAppState } from "../../../../redux/store/configureStore"
import {
  changeTrackLabel,
  toggleActiveTrack,
  toggleMuteTrack,
  toggleSoloTrack
} from "../../../../redux/actions/session/creators"
import { Dispatch } from "redux"
import { AnyAction } from "../../../../redux/reducers"

interface IOwnProps {
  trackID: string
}

interface IProps extends IOwnProps {
  color: MaterialColor
  muted: boolean
  soloed: boolean
  gain: number
  label: string
  onMuteClick: () => void
  onSoloClick: () => void
  onTitleClick: () => void
  changeTrackLabel: (label: string) => void
}

const Container = styled.div`
  cursor: pointer;
`

const StyledTrackHeader = styled.div<{
  width: number
  height: number
  gutter: number
  color: MaterialColor
}>`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ gutter }) => gutter}px;
  border-radius: 3px;
  background-color: ${({ color }) => Color.get800(color)};
  color: ${({ color }) => Color.get100(color)};

  &:hover {
    background-color: ${({ color }) => Color.get600(color)};
    color: ${({ color }) => Color.get50(color)};
  }
`

const StyledControls = styled.div`
  display: flex;
`

const GainIndicator = styled.div`
  user-select: none;
  margin-left: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  font-size: 13px;
`

const StyledLabelForm = styled.form<{ gutter: number; color: MaterialColor }>`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  & input {
    padding: ${({ gutter }) => gutter}px;
    border: 1px solid ${({ color }) => Color.get300(color)};
    border-radius: 3px;
    background-color: ${({ color }) => Color.get400(color)};
    color: ${({ color }) => Color.get900(color)};
    font-size: 13px;
    line-height: 0;
  }
`

// https://css-tricks.com/snippets/javascript/bind-different-events-to-click-and-double-click/#comment-1671033
let timer: number
const delay = 200

export function TrackHeader(props: IProps) {
  const [labelEdited, setLabelEdited] = React.useState(false)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const { panelWidth, cellSize, gutter } = usePrefs()

  const doubleClickAction = () => {
    setLabelEdited(true)
  }

  const singleClickAction = () => {
    props.onTitleClick()
  }

  const handleClick = () => {
    if (labelEdited) {
      return
    }

    if (clicked) {
      clearTimeout(timer)
      doubleClickAction()
      setClicked(false)
    } else {
      setClicked(true)

      timer = setTimeout(() => {
        setLabelEdited(false)
        singleClickAction()
        setClicked(false)
      }, delay)
    }
  }

  const handleSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const submittedLabel = formData.get("label")

    if (typeof submittedLabel === "string") {
      props.changeTrackLabel(submittedLabel)
      setLabelEdited(false)
    }
  }

  return (
    <Container title="Open/close track panel" onClick={handleClick}>
      <StyledTrackHeader
        width={panelWidth}
        height={cellSize}
        gutter={gutter}
        color={props.color}
      >
        {labelEdited ? (
          <StyledLabelForm
            color={props.color}
            gutter={gutter}
            onSubmit={handleSubmit}
          >
            <input type="text" name="label" defaultValue={props.label} />
          </StyledLabelForm>
        ) : (
          <React.Fragment>
            <TrackLabel label={props.label} color={props.color} />
            <StyledControls>
              <GainIndicator>{Volume.toDBString(props.gain)}</GainIndicator>
              <SoloButton
                color={props.color}
                width={cellSize - 2 * gutter}
                soloed={props.soloed}
                onClick={() => props.onSoloClick()}
              />
              <MuteButton
                color={props.color}
                width={cellSize - 2 * gutter}
                muted={props.muted}
                onClick={() => props.onMuteClick()}
              />
            </StyledControls>
          </React.Fragment>
        )}
      </StyledTrackHeader>
    </Container>
  )
}

const mapStateToProps = (state: IAppState, ownProps: IOwnProps) => {
  const track = state.session.tracks[ownProps.trackID]

  return {
    label: track.label,
    color: track.color,
    gain: track.processing.gain.gain,
    muted: track.muted,
    soloed: track.soloed
  }
}

const TrackHeaderMemoized = React.memo(TrackHeader)

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: IOwnProps
) => ({
  onMuteClick: () => dispatch(toggleMuteTrack(ownProps.trackID)),
  onSoloClick: () => dispatch(toggleSoloTrack(ownProps.trackID)),
  onTitleClick: () => dispatch(toggleActiveTrack(ownProps.trackID)),
  changeTrackLabel: (label: string) =>
    dispatch(changeTrackLabel(label, ownProps.trackID))
})

const TrackHeaderWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackHeaderMemoized)

export default TrackHeaderWithConnect
