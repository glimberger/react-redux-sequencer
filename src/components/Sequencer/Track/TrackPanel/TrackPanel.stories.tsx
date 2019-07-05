import React from "react"
import { storiesOf } from "@storybook/react"

import {
  withContainer,
  withPrefsProvider,
  withReduxProvider,
  stateFixture
} from "../../../../../.storybook/decorators"

import TrackPanel from "./TrackPanel"

const state: any = {
  ...stateFixture,
  session: {
    ...stateFixture.session,
    activeTrackID: "2",
    activeCellBeat: 6
  }
}

storiesOf("TrackPanel", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withReduxProvider(state))
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("default", () => <TrackPanel />)
