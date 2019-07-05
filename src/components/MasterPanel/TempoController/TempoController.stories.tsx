import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { TempoController } from "./TempoController"
import { withContainer } from "../../../../.storybook/decorators"
import {
    withKnobs,
    number,
} from "@storybook/addon-knobs"

storiesOf("TempoController", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
    .addDecorator(withKnobs)
  .addDecorator(story => withContainer(story))
  .add("default — use knobs", () => {
      const tempo = number('Tempo', 120)
      return (
          <TempoController
              color={"blueGrey"}
              tempo={tempo}
              onChange={action("onChange")}
          />
      )
  })
