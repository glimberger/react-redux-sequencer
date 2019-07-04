import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { MasterGainController } from "./MasterGainController"
import { withContainer } from "../../../../.storybook/decorators"

storiesOf("MasterGainController", module)
    .addDecorator(story => withContainer(story))
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
