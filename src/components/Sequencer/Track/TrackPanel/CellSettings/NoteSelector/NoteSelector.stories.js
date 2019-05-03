import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import NoteSelector from "./NoteSelector"

storiesOf("NoteSelector", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "1rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <NoteSelector
      height={80}
      keyWidth={16}
      activeNote={69}
      color={"deepPurple"}
      activeCellBeat={6}
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      getMappingForNote={() => ({ sampleID: "foo", detune: -200 })}
      getSample={() => ({
        id: "bar",
        filename: "filename",
        url: "",
        type: "",
        label: "sampl label",
        group: "sample group"
      })}
      changeCellNote={action("changeCellNote")}
      listenCellNote={action("listenCellNote")}
    />
  ))
