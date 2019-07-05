import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { NoteSelector } from "./NoteSelector"
import { withContainer } from "../../../../../../../.storybook/decorators"
import { select, number, withKnobs } from "@storybook/addon-knobs"
import Color, { trackColors } from "../../../../../../utils/color/colorLibrary"

storiesOf("NoteSelector", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withContainer)
  .add("default — use knobs", () => {
    const color = select("Color", trackColors, Color.DEEP_PURPLE)
    const activeNote = number("Active note", 69)

    return (
      <NoteSelector
        height={80}
        keyWidth={16}
        activeNote={activeNote}
        color={color}
        activeCellBeat={6}
        activeTrackID={"2"}
        mapping={note => {
          if (note < 21 || note > 98) {
            return null
          }
          return { midi: note, sampleID: "foo", detune: -200 }
        }}
        sample={() => ({
          id: "1",
          filename: "filename",
          url: "",
          type: "",
          label: "sample label",
          group: "sample group"
        })}
        changeCellNote={action("changeCellNote")}
        listenCellNote={action("listenCellNote")}
      />
    )
  })
