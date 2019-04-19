import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Knob from "./Knob"

storiesOf("Knob", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("value = 25", () => (
    <Knob
      prefs={{ color: "pink", size: 80 }}
      value={25}
      min={0}
      max={100}
      step={1}
      onChange={action("onChange")}
    />
  ))
  .add("value = 40", () => (
    <Knob
      prefs={{ color: "red", size: 80 }}
      value={40}
      min={0}
      max={100}
      step={1}
      onChange={action("onChange")}
    />
  ))
  .add("value = 75", () => (
    <Knob
      prefs={{ color: "indigo", size: 80 }}
      value={75}
      min={0}
      max={100}
      step={1}
      onChange={action("onChange")}
    />
  ))
