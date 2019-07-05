import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import { Transport } from "./Transport"
import { withContainer } from "../../../../.storybook/decorators"
import { withKnobs, boolean } from "@storybook/addon-knobs"

library.add(faPlay, faPause)

storiesOf("Transport", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withContainer)
  .add("default - use knobs", () => {
    const playing = boolean("Played", true)
    return (
      <Transport
        color={"blueGrey"}
        playing={playing}
        togglePlay={action("togglePlay")}
      />
    )
  })
