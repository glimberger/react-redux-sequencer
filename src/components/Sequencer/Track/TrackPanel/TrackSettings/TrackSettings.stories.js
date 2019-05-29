import React from "react"
import { storiesOf } from "@storybook/react"

import {
  withContainer,
  withPrefsProvider,
  withReduxProvider
} from "../../../../../../.storybook/decorators"
import { TrackSettings } from "./TrackSettings"
import { initialSate } from "../../../../../redux/reducers"
import colorLibrary from "../../../../../utils/color/colorLibrary"

const matrix = Array.from(Array(64).keys()).map(beat => ({
  scheduled: beat % 3 === 0,
  midi: 69,
  processing: { gain: { gain: 1 } }
}))

const state = {
  ...initialSate,
  audio: {
    ...initialSate.audio,
    currentBeat: 0
  },
  session: {
    ...initialSate.session,
    activeTrackID: "1",
    activeCellBeat: 12,
    trackOrder: ["1"],
    tracks: {
      "1": {
        color: colorLibrary.LIGHT_GREEN,
        noteResolution: 2,
        processing: { gain: { gain: 0.7 } }
      }
    },
    matrix: {
      "1": matrix
    }
  }
}

storiesOf("TrackSettings", module)
  .addDecorator(story => withReduxProvider(state)(story))
  .addDecorator(story => withPrefsProvider(story))
  .addDecorator(story => withContainer(story))
  .add("active track", () => (
    <TrackSettings color={colorLibrary.LIGHT_GREEN} isTrackActive={true} />
  ))
  .add("no active track", () => (
    <TrackSettings isTrackActive={false} color={colorLibrary.RED} />
  ))
