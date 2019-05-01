// @flow strict
import * as React from "react"

import Color from "../../../../../../utils/color/colorLibrary"

import type {
  NoteResolution,
  Session,
  Track
} from "../../../../../../redux/store/session/types"
import type { MaterialColor } from "../../../../../../utils/color/colorLibrary"

type OwnProps = {
  gutter: number
}

type StateProps = {
  color: $PropertyType<Track, "color">,
  noteResolution: $PropertyType<Track, "noteResolution">,
  activeTrackID: $PropertyType<Session, "activeTrackID">
}

type DispatchProps = {
  changeNoteResolution: (
    noteResolution: NoteResolution,
    trackID: string
  ) => void
}

type Props = OwnProps & StateProps & DispatchProps

type State = {
  hoverButtonResolution_1: boolean,
  hoverButtonResolution_2: boolean,
  hoverButtonResolution_4: boolean
}

class ResolutionSwitch extends React.Component<Props, State> {
  state = {
    hoverButtonResolution_1: false,
    hoverButtonResolution_2: false,
    hoverButtonResolution_4: false
  }

  hoverOn(noteResolution: NoteResolution) {
    this.setState({ [`hoverButtonResolution_${noteResolution}`]: true })
  }
  hoverOff(noteResolution: NoteResolution) {
    this.setState({ [`hoverButtonResolution_${noteResolution}`]: false })
  }

  static backGroundColor(
    color: MaterialColor,
    active: boolean,
    hover: boolean
  ) {
    return active
      ? Color.get50(color)
      : hover
      ? Color.get200(color)
      : Color.get400(color)
  }

  render() {
    if (!this.props.activeTrackID) return null

    const css = {
      NoteResolution: {
        display: "flex",
        alignItems: "stretch",
        width: "100px",
        height: "24px",
        // padding: `${this.props.gutter}px`,
        // backgroundColor: Color.get700(this.props.color),
        fontSize: "14px",
        fontWeight: "700",
        borderRadius: "3px",
        userSelect: "none",
        zIndex: "999"
      },
      ButtonResolution_1: {
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ResolutionSwitch.backGroundColor(
          this.props.color,
          this.props.noteResolution === 1,
          this.state.hoverButtonResolution_1
        ),
        borderTopLeftRadius: "3px",
        borderBottomLeftRadius: "3px",
        cursor: this.props.noteResolution === 1 ? "default" : "pointer"
      },
      ButtonResolution_2: {
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ResolutionSwitch.backGroundColor(
          this.props.color,
          this.props.noteResolution === 2,
          this.state.hoverButtonResolution_2
        ),
        cursor: this.props.noteResolution === 2 ? "default" : "pointer"
      },
      ButtonResolution_4: {
        flex: "1 1 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ResolutionSwitch.backGroundColor(
          this.props.color,
          this.props.noteResolution === 4,
          this.state.hoverButtonResolution_4
        ),
        borderTopRightRadius: "3px",
        borderBottomRightRadius: "3px",
        cursor: this.props.noteResolution === 4 ? "default" : "pointer"
      }
    }
    return (
      <div style={css.NoteResolution}>
        <div
          style={css.ButtonResolution_1}
          role="button"
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 1) {
              this.props.changeNoteResolution(1, this.props.activeTrackID)
            }
          }}
          onMouseEnter={() => this.hoverOn(1)}
          onMouseLeave={() => this.hoverOff(1)}
        >
          &#x266C;
        </div>
        <div
          style={css.ButtonResolution_2}
          role="button"
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 2) {
              this.props.changeNoteResolution(2, this.props.activeTrackID)
            }
          }}
          onMouseEnter={() => this.hoverOn(2)}
          onMouseLeave={() => this.hoverOff(2)}
        >
          &#x266B;
        </div>
        <div
          style={css.ButtonResolution_4}
          role="button"
          onClick={() => {
            if (this.props.activeTrackID && this.props.noteResolution !== 4) {
              this.props.changeNoteResolution(4, this.props.activeTrackID)
            }
          }}
          onMouseEnter={() => this.hoverOn(4)}
          onMouseLeave={() => this.hoverOff(4)}
        >
          &#x2669;
        </div>
      </div>
    )
  }
}

export default ResolutionSwitch
