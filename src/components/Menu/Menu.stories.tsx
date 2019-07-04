import React from "react"
import { storiesOf } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"

import Menu from "./Menu"

storiesOf("Menu", module)
  .addDecorator(story => <div>{story()}</div>)
  .add("default", () => (
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  ))
