import React from "react"
import { storiesOf } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"

import Menu from "./Menu"

storiesOf("Menu", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(story => (
    <div style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>{story()}</div>
  ))
  .add("default", () => (
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  ))
