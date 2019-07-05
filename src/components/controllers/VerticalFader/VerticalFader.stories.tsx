import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import VerticalFader from "./VerticalFader"
import Color, { trackColors } from "../../../utils/color/colorLibrary"
import { number, select, withKnobs } from "@storybook/addon-knobs"

storiesOf("VerticalFader", module)
    .addParameters({
        info: {
            inline: true,
            header: false
        }
    })
    .addDecorator(withKnobs)
  .add("w=70, h=300", () => {
      const color = select("Color", trackColors, Color.ORANGE)
      const value = number("Value [0,1]", 0.707)
      const height = number("Height", 300)
      const width = number('Width', 70)

      return (
          <div
              style={{
                  width: "100%",
                  height: "100vh",
                  padding: "2rem",
                  backgroundColor: Color.get800Dark(color)
              }}
          >
              <VerticalFader
                  width={width}
                  height={height}
                  color={color}
                  fontSize={13}
                  value={value}
                  onValueChange={action("onChange")}
              />
          </div>
      )
  })
  .add("w=48, h=400", () => {
      const color = select("Color", trackColors, Color.PINK)
      const value = number("Value [0,1]", 0.707)
      const height = number("Height", 400)
      const width = number('Width', 48)

      return (
          <div
              style={{
                  width: "100%",
                  height: "100vh  ",
                  padding: "2rem",
                  backgroundColor: Color.get800Dark(color)
              }}
          >
              <VerticalFader
                  width={width}
                  height={height}
                  color={color}
                  fontSize={9}
                  value={value}
                  onValueChange={action("onChange")}
              />
          </div>
      )
  })
