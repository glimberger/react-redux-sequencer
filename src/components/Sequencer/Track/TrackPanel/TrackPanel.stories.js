import React from "react"
import { storiesOf } from "@storybook/react"

import { reduxDecorator } from "../../../../../.storybook/decorators"

import TrackPanel from "./TrackPanel"

storiesOf("TrackPanel", module)
  .addDecorator(reduxDecorator())
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("connected with redux", () => (
    <TrackPanel cellSize={36} headerWidth={300} height={300} gutter={6} />
  ))
