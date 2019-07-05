import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Knob from "./Knob"
import { withKnobs, number, select } from "@storybook/addon-knobs"
import Color, { trackColors } from "../../../utils/color/colorLibrary"

storiesOf("Knob", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default - use knobs", () => {
    const value = number("Value [0,100]", 25)
    const color = select("Color", trackColors, Color.PINK)
    const size = number("Size", 80)

    return (
      <Knob
        prefs={{ color, size }}
        value={value}
        min={0}
        max={100}
        step={1}
        onChange={action("onChange")}
      />
    )
  })
