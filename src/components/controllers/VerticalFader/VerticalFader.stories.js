import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import VerticalFader from "./VerticalFader"
import Color from "../../../utils/color/colorLibrary"

storiesOf("VerticalFader", module)
  .add("w=70, h=300", () => (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: "2rem",
        backgroundColor: Color.get800Dark("indigo")
      }}
    >
      <VerticalFader
        width={70}
        height={300}
        gutter={6}
        color={"indigo"}
        fontSize={13}
        value={0.707}
        onValueChange={action("onChange")}
      />
    </div>
  ))
  .add("w=48, h=300", () => (
    <div
      style={{
        width: "100%",
        height: "100vh  ",
        padding: "2rem",
        backgroundColor: Color.get800Dark("pink")
      }}
    >
      <VerticalFader
        width={48}
        height={300}
        gutter={6}
        color={"pink"}
        fontSize={9}
        value={0.07}
        onValueChange={action("onChange")}
      />
    </div>
  ))
