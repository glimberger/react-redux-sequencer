import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import Transport from "./Transport"

library.add(faPlay, faPause)

storiesOf("Transport", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      <div style={{ height: "4rem", display: "flex" }}>{story()}</div>
    </div>
  ))
  .add("played", () => (
    <Transport
      color={"blueGrey"}
      playing={true}
      handleClick={action("onClick")}
      mode={"PLAY"}
      togglePlay={action("togglePlay")}
    />
  ))
  .add("not played", () => (
    <Transport
      color={"blueGrey"}
      playing={false}
      handleClick={action("onClick")}
      mode={"EDIT"}
      togglePlay={action("togglePlay")}
    />
  ))
