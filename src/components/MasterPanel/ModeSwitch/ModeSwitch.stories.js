import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import ModeSwitch from "./ModeSwitch"

storiesOf("ModeSwitch", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => (
    <ModeSwitch
      mode={"EDIT"}
      color={"grey"}
      setEditMode={action("setEditMode")}
      setPlayMode={action("setPlayMode")}
    />
  ))
