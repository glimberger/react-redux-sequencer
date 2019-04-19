import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Transport from "./Transport"

storiesOf("Transport", module)
  .add("played", () => (
    <Transport
      playing={true}
      handleClick={action("onClick")}
      mode={"PLAY"}
      togglePlay={action("togglePlay")}
    />
  ))
  .add("not played", () => (
    <Transport
      playing={false}
      handleClick={action("onClick")}
      mode={"EDIT"}
      togglePlay={action("togglePlay")}
    />
  ))
