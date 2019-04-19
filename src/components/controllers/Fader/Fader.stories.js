import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Fader from "./Fader"

storiesOf("Fader", module)
  .addDecorator(story => <div style={{ height: "100px" }}>{story()}</div>)
  .add("default", () => (
    <Fader onChange={action("onChange")} value={0} color={"indigo"} />
  ))
  .add("vertical", () => (
    <Fader
      onChange={action("onChange")}
      value={0}
      orientation="vertical"
      size={200}
      color={"purple"}
    />
  ))
  .add("horizontal", () => (
    <Fader
      onChange={action("onChange")}
      value={0}
      orientation="horizontal"
      size={300}
      color={"red"}
    />
  ))
