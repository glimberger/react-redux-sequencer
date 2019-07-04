import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { NoteSelector } from "./NoteSelector"
import { withContainer } from "../../../../../../../.storybook/decorators"

storiesOf("NoteSelector", module)
  .addDecorator(story => withContainer(story))
  .add("default", () => (
    <NoteSelector
      height={80}
      keyWidth={16}
      activeNote={69}
      color={"deepPurple"}
      activeCellBeat={6}
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      mapping={note => {
        if (note < 21 || note > 98) {
          return null
        }
        return { midi: note, sampleID: "foo", detune: -200 }
      }}
      sample={() => ({
        id: "bar",
        filename: "filename",
        url: "",
        type: "",
        label: "sample label",
        group: "sample group"
      })}
      changeCellNote={action("changeCellNote")}
      listenCellNote={action("listenCellNote")}
    />
  ))
