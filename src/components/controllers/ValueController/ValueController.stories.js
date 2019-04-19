import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ValueController from "./ValueController"

storiesOf("ValueController", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => (
    <ValueController
      onChange={action("onChange")}
      value={120}
      min={20}
      max={200}
      amount={2}
      prefs={{ color: "red" }}
    />
  ))
