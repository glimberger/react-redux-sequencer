import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { ResolutionSwitch } from "./ResolutionSwitch"
import {
  withContainer,
  withPrefsProvider
} from "../../../../../../../.storybook/decorators"
import { withKnobs, select } from "@storybook/addon-knobs"
import Color, { trackColors } from "../../../../../../utils/color/colorLibrary"
import { NoteResolution } from "../../../../../../redux/store/session/interfaces"

storiesOf("ResolutionSwitch", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("sixteenth note - use knobs", () => {
    const color = select("Color", trackColors, Color.PINK)
    const noteResolution = select(
      "Note resolution",
      {
        "sixteenth note": 1 as NoteResolution,
        "eighth note": 2 as NoteResolution,
        "quarter note": 4 as NoteResolution
      },
      1
    )

    return (
      <ResolutionSwitch
        activeTrackID={"1"}
        color={color}
        noteResolution={noteResolution}
        changeNoteResolution={action("changeNoteResolution")}
      />
    )
  })
