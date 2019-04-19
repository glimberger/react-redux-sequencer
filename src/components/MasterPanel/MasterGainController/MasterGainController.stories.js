import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import MasterGainController from "./MasterGainController"

storiesOf("MasterGainController", module)
  .addDecorator(story => (
    <div
      style={{
        width: "30%",
        height: "100%",
        padding: "3rem"
        // backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("gain 0dB", () => (
    <MasterGainController gain={1} onGainChange={action("onGainChange")} />
  ))
  .add("gain -6dB", () => (
    <MasterGainController gain={0.5} onGainChange={action("onGainChange")} />
  ))
