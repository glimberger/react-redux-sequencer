import React from "react"
import { storiesOf } from "@storybook/react"

import {
  withContainer,
  withPrefsProvider,
  withReduxProvider,
  stateFixture
} from "../../../../../../.storybook/decorators"
import { TrackSettings } from "./TrackSettings"
import { withKnobs, boolean } from "@storybook/addon-knobs"

storiesOf("TrackSettings", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(withReduxProvider(stateFixture))
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("active track - use knobs", () => {
    const active = boolean("Track active", true)

    return <TrackSettings color={"red"} isTrackActive={active} />
  })
