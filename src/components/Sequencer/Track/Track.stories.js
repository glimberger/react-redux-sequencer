import React from "react"
import { storiesOf } from "@storybook/react"

import Track from "./Track"
import { reduxDecorator } from "../../../../.storybook/decorators"

storiesOf("Track", module)
  .addDecorator(reduxDecorator())
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%  ",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <Track
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      trackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      cellSize={40}
      gutter={6}
      panelHeight={300}
      panelWidth={300}
    />
  ))
