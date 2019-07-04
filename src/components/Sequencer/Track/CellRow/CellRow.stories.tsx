import React from "react"
import { storiesOf } from "@storybook/react"

import CellRow from "./CellRow"
import {
  withContainer,
  withPrefsProvider,
  withReduxProvider
} from "../../../../../.storybook/decorators"
import { initialSate } from "../../../../redux/reducers"
import colorLibrary from "../../../../utils/color/colorLibrary"

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
    activeTrackID: "4",
    activeCellBeat: 12,
    trackOrder: ["1", "2", "3", "4"],
    tracks: {
      "1": { color: colorLibrary.RED, noteResolution: 1 },
      "2": { color: colorLibrary.ORANGE, noteResolution: 2 },
      "3": { color: colorLibrary.INDIGO, noteResolution: 4 },
      "4": { color: colorLibrary.GREEN, noteResolution: 1 }
    },
    matrix: {
      "1": matrix,
      "2": matrix,
      "3": matrix,
      "4": matrix
    }
  }
}

storiesOf("CellRow", module)
  .addDecorator(story => withReduxProvider(state)(story))
  .addDecorator(story => withPrefsProvider(story))
  .addDecorator(story => withContainer(story))
  .add("sixteenth notes", () => <CellRow trackID="1" />)
  .add("eighth notes", () => <CellRow trackID="2" />)
  .add("quarter notes", () => <CellRow trackID="3" />)
  .add("sixteenth notes — active track", () => <CellRow trackID="4" />)
