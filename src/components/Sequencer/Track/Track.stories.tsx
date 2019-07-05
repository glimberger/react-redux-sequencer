import React from "react"
import { storiesOf } from "@storybook/react"

import Track from "./Track"
import {
  withContainer,
  withPrefsProvider,
  withReduxProvider,
  stateFixture
} from "../../../../.storybook/decorators"

storiesOf("Track", module)
  .addDecorator(withReduxProvider(stateFixture))
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("active", () => <Track trackID={"1"} />)
  .add("not active", () => <Track trackID={"2"} />)
