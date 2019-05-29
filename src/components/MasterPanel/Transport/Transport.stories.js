import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import { Transport } from "./Transport"
import { withContainer } from "../../../../.storybook/decorators"

library.add(faPlay, faPause)

storiesOf("Transport", module)
  .addDecorator(story => withContainer(story))
  .add("played", () => (
    <Transport
      color={"blueGrey"}
      playing={true}
      togglePlay={action("togglePlay")}
    />
  ))
  .add("not played", () => (
    <Transport
      color={"blueGrey"}
      playing={false}
      togglePlay={action("togglePlay")}
    />
  ))
