import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { TempoController } from "./TempoController"
import { withContainer } from "../../../../.storybook/decorators"

storiesOf("TempoController", module)
  .addDecorator(story => withContainer(story))
  .add("horizontal tempo=120", () => (
    <TempoController
      color={"blueGrey"}
      tempo={120}
      onChange={action("onChange")}
    />
  ))
