import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import ResolutionSwitch from "./ResolutionSwitch"

storiesOf("ResolutionSwitch", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100vh  ",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("sixteenth note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"pink"}
      gutter={6}
      noteResolution={1}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("eighth note note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"pink"}
      gutter={6}
      noteResolution={2}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("quarter note note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"pink"}
      gutter={6}
      noteResolution={4}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("no active track", () => (
    <ResolutionSwitch
      activeTrackID={null}
      color={"pink"}
      gutter={6}
      noteResolution={1}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
