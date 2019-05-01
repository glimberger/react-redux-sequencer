import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import TrackSettings from "./TrackSettings"
import { reduxDecorator } from "../../../../../../.storybook/decorators"

storiesOf("TrackSettings", module)
  .addDecorator(reduxDecorator())
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%  ",
        padding: "1rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("connected with redux", () => (
    <TrackSettings
      isTrackActive={true}
      trackID="8ebdfbd8-4528-4e5e-932b-987c5405aec5"
      color={"red"}
      width={300}
      height={300}
      gutter={6}
      changeGain={action("changeGain")}
    />
  ))
  .add("no active track", () => (
    <TrackSettings
      isTrackActive={false}
      trackID={null}
      color={"red"}
      width={300}
      height={300}
      gutter={6}
      changeGain={action("changeGain")}
    />
  ))
