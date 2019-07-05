import * as React from "react"
import { storiesOf } from "@storybook/react"

import CellSettings from "./CellSettings"
import {
  withContainer,
  withPrefsProvider,
  withReduxProvider,
  stateFixture
} from "../../../../../../.storybook/decorators"

storiesOf("CellSettings", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(withReduxProvider(stateFixture))
  .addDecorator(withPrefsProvider)
  .addDecorator(withContainer)
  .add("default", () => <CellSettings />)
