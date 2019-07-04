import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { TrackHeader } from "./TrackHeader"
import {
  withContainer,
  withPrefsProvider
} from "../../../../../.storybook/decorators"

storiesOf("TrackHeader", module)
  .addDecorator(story => withPrefsProvider(story))
  .addDecorator(story => withContainer(story))
  .add("default", () => (
    <TrackHeader
      color={"red"}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={false}
      soloed={false}
      gain={0.7}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
      changeTrackLabel={action("changeTrackLabel")}
    />
  ))
  .add("muted", () => (
    <TrackHeader
      color={"pink"}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={true}
      soloed={false}
      gain={0.3}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
      changeTrackLabel={action("changeTrackLabel")}
    />
  ))
  .add("soloed", () => (
    <TrackHeader
      color={"purple"}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={false}
      soloed={true}
      gain={0.4}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
      changeTrackLabel={action("changeTrackLabel")}
    />
  ))
