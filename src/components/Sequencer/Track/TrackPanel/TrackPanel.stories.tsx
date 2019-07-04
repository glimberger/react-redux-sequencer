import React from "react"
import { storiesOf } from "@storybook/react"

import {
  withContainer,
  withPrefsProvider,
  withReduxProvider
} from "../../../../../.storybook/decorators"

import TrackPanel from "./TrackPanel"
import { initialSate } from "../../../../redux/reducers"
import colorLibrary from "../../../../utils/color/colorLibrary"

const mapping = Array.from(Array(128).keys()).map(() => ({
  sampleID: "1",
  detune: 0
}))

const matrix = Array.from(Array(64).keys()).map(beat => ({
  scheduled: beat % 3 === 0,
  midi: 69,
  processing: { gain: { gain: 1 } }
}))

const state: any = {
  ...initialSate,
  audio: {
    ...initialSate.audio,
    currentBeat: 0
  },
  session: {
    ...initialSate.session,
    activeTrackID: "1",
    activeCellBeat: 6,
    trackOrder: ["1"],
    tracks: {
      "1": {
        instrumentID: "1",
        color: colorLibrary.LIGHT_BLUE,
        noteResolution: 2,
        processing: { gain: { gain: 0.7 } }
      }
    },
    instruments: {
      "1": { id: "1", mapping }
    },
    matrix: {
      "1": matrix
    },
    samples: {
      "1": { label: "ISample" }
    }
  }
}

storiesOf("TrackPanel", module)
  .addDecorator(story => withReduxProvider(state)(story))
  .addDecorator(story => withPrefsProvider(story))
  .addDecorator(story => withContainer(story))
  .add("default", () => <TrackPanel />)
