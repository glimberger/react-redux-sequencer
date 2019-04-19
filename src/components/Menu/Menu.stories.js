import React from "react"
import { storiesOf } from "@storybook/react"

import Menu from "./Menu"

storiesOf("Menu", module)
  .addDecorator(story => <div>{story()}</div>)
  .add("default", () => <Menu />)
