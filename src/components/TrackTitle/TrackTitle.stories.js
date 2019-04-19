import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import TrackTitle from "./TrackTitle"

storiesOf("TrackTitle", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100vh  ",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <TrackTitle
      prefs={{ color: "deepPurple", width: 350, height: 40 }}
      label={"Instrument Label"}
      instrumentID={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      muted={false}
      onMuteClick={action("onMuteClick")}
      soloed={false}
      onSoloClick={action("onSoloClick")}
      gain={1}
      onTitleClick={action("onTitleClick")}
    />
  ))
  .add("muted", () => (
    <TrackTitle
      prefs={{ color: "deepPurple", width: 350, height: 40 }}
      label={"Instrument Label"}
      instrumentID={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      muted={true}
      onMuteClick={action("onMuteClick")}
      soloed={false}
      onSoloClick={action("onSoloClick")}
      gain={1}
      onTitleClick={action("onTitleClick")}
    />
  ))
  .add("soloed", () => (
    <TrackTitle
      prefs={{ color: "deepPurple", width: 350, height: 40 }}
      label={"Instrument Label"}
      instrumentID={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      muted={false}
      onMuteClick={action("onMuteClick")}
      soloed={true}
      onSoloClick={action("onSoloClick")}
      gain={1}
      onTitleClick={action("onTitleClick")}
    />
  ))
  .add("bigger", () => (
    <TrackTitle
      prefs={{ color: "deepPurple", width: 350, height: 60 }}
      label={"Instrument Label"}
      instrumentID={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      muted={false}
      onMuteClick={action("onMuteClick")}
      soloed={false}
      onSoloClick={action("onSoloClick")}
      gain={1}
      onTitleClick={action("onTitleClick")}
    />
  ))
