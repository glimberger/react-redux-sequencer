import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, select, number, boolean } from "@storybook/addon-knobs"

import { Cell } from "./Cell"
import {
  withContainer,
  withPrefsProvider
} from "../../../../../../.storybook/decorators"
import Color, { trackColors } from "../../../../../utils/color/colorLibrary"

storiesOf("Cell", module)
  .addDecorator(withKnobs)
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("default — use knobs", () => {
    const c = select("Color", trackColors, Color.DEEP_PURPLE)
    const rendered = boolean("Rendered", true)
    const played = boolean("Played", true)
    const scheduled = boolean("Scheduled", true)
    const edited = boolean("Edited", false)
    const gain = number("Gain - min: 0", 0.7)

    return (
      <div style={{ display: "flex" }}>
        <Cell
          trackID={"foo"}
          beatNumber={0}
          activeTrackID={"bar"}
          color={c}
          gutter={6}
          rendered={rendered}
          played={played}
          scheduled={scheduled}
          edited={edited}
          noteResolution={1}
          gain={gain}
          onClick={action("onClick")}
        />
        <Cell
          trackID={"foo"}
          beatNumber={0}
          activeTrackID={"bar"}
          color={c}
          gutter={6}
          rendered={rendered}
          played={played}
          scheduled={scheduled}
          edited={edited}
          noteResolution={2}
          gain={gain}
          onClick={action("onClick")}
        />
        <Cell
          trackID={"foo"}
          beatNumber={0}
          activeTrackID={"bar"}
          color={c}
          gutter={6}
          rendered={rendered}
          played={played}
          scheduled={scheduled}
          edited={edited}
          noteResolution={4}
          gain={gain}
          onClick={action("onClick")}
        />
      </div>
    )
  })
