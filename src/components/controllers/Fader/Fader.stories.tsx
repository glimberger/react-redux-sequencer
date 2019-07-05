import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Fader from "./Fader"
import { withKnobs, select, number } from "@storybook/addon-knobs"
import { withContainer } from "../../../../.storybook/decorators"
import Color, { trackColors } from "../../../utils/color/colorLibrary"

storiesOf("Fader", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withContainer)
  .add("default - use knobs", () => {
    const color = select("Color", trackColors, Color.INDIGO)
    const value = number("Value [0,100]", 20)

    return <Fader onChange={action("onChange")} value={value} color={color} />
  })
  .add("vertical", () => {
    const color = select("Color", trackColors, Color.PURPLE)
    const value = number("Value [0,100]", 20)

    return (
      <div style={{ height: "200px" }}>
        <Fader
          onChange={action("onChange")}
          value={value}
          orientation={"vertical"}
          size={200}
          color={color}
        />
      </div>
    )
  })
  .add("horizontal", () => {
    const color = select("Color", trackColors, Color.GREEN)
    const value = number("Value [0,100]", 20)

    return (
      <Fader
        onChange={action("onChange")}
        value={value}
        orientation={"horizontal"}
        size={300}
        color={color}
      />
    )
  })
