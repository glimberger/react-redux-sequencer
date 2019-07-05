import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { MasterGainController } from "./MasterGainController"
import { withContainer } from "../../../../.storybook/decorators"
import { number, withKnobs } from "@storybook/addon-knobs"

storiesOf("MasterGainController", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withContainer)
  .add("default — use knobs", () => {
    const gain = number("Gain - min : 0", 1)

    return (
      <MasterGainController
        color={"blueGrey"}
        gain={gain}
        changeMasterGain={action("changeMasterGain")}
      />
    )
  })
  .add("gain 0dB", () => (
    <MasterGainController
      color={"blueGrey"}
      gain={1}
      changeMasterGain={action("changeMasterGain")}
    />
  ))
  .add("gain -6dB", () => (
    <MasterGainController
      color={"blueGrey"}
      gain={0.5}
      changeMasterGain={action("changeMasterGain")}
    />
  ))
