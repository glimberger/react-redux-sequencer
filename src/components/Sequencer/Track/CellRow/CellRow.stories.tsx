import React from "react"
import { storiesOf } from "@storybook/react"

import CellRow from "./CellRow"
import {
  withContainer,
  withPrefsProvider,
  withReduxProvider,
  stateFixture
} from "../../../../../.storybook/decorators"
import { IAppState } from "../../../../redux/store/configureStore"

const state: IAppState = {
  ...stateFixture,
  audio: {
    ...stateFixture.audio,
    currentBeat: 0
  },
  session: {
    ...stateFixture.session,
    activeTrackID: "4",
    activeCellBeat: 12
  }
}

storiesOf("CellRow", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    }
  })
  .addDecorator(withReduxProvider(state))
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("sixteenth notes", () => <CellRow trackID="1" />, {
    info: {
      text: `
    ##### Track settings:
    * __sixteenth__ notes display
    * not active
    * active beat : 12
    * current beat : 0
    `
    }
  })
  .add("eighth notes", () => <CellRow trackID="2" />, {
    info: {
      text: `
    ##### Track settings:
    * __eighth notes__ display
    * not active
    * active beat : 12
    * current beat : 0
    `
    }
  })
  .add("quarter notes", () => <CellRow trackID="3" />, {
    info: {
      text: `
    ##### Track settings:
    * __quarter notes__ display
    * not active
    * current beat : 0
    `
    }
  })
  .add("sixteenth notes — active track", () => <CellRow trackID="4" />, {
    info: {
      text: `
    ##### Track settings:
    * __sixteenth notes__ display
    * __active__ track
    * active beat : 12
    * current beat : 0
    `
    }
  })
