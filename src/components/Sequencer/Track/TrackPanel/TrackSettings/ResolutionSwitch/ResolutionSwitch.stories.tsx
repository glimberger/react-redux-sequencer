import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { ResolutionSwitch } from "./ResolutionSwitch"
import {
  withContainer,
  withPrefsProvider
} from "../../../../../../../.storybook/decorators"

storiesOf("ResolutionSwitch", module)
  .addDecorator(story => withPrefsProvider(story))
  .addDecorator(story => withContainer(story))
  .add("sixteenth note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"pink"}
      noteResolution={1}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("eighth note note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"green"}
      noteResolution={2}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("quarter note note", () => (
    <ResolutionSwitch
      activeTrackID={"79d465a1-938d-4b61-8b03-db7163af5ec1"}
      color={"indigo"}
      noteResolution={4}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
  .add("no active track", () => (
    <ResolutionSwitch
      activeTrackID={null}
      color={"pink"}
      noteResolution={1}
      changeNoteResolution={action("changeNoteResolution")}
    />
  ))
