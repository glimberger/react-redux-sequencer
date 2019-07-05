import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import {
  withKnobs,
  text,
  select,
  number,
  boolean
} from "@storybook/addon-knobs"

import { TrackHeader } from "./TrackHeader"
import {
  withContainer,
  withPrefsProvider
} from "../../../../../.storybook/decorators"
import Color, { trackColors } from "../../../../utils/color/colorLibrary"

storiesOf("TrackHeader", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("default", () => {
    const label = text("Label", "Track number one")
    const gain = number("Gain", 0.7)
    const color = select("Color", trackColors, Color.RED)
    const soloed = boolean("Solo", false)
    const muted = boolean("Mute", false)

    return (
      <TrackHeader
        color={color}
        label={label}
        trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
        soloed={soloed}
        gain={gain}
        muted={muted}
        onMuteClick={action("onMuteClick")}
        onSoloClick={action("onSoloClick")}
        onTitleClick={action("onTitleClick")}
        changeTrackLabel={action("changeTrackLabel")}
      />
    )
  })
