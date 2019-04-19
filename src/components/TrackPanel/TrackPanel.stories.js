import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import TrackPanel from "./TrackPanel"

const nodes = {
  gain: { gain: 1 }
}

storiesOf("TrackPanel", module)
  .addDecorator(story => (
    <div
      style={{
        padding: "3rem"
      }}
    >
      {story()}
    </div>
  ))
  .add("closed", () => (
    <TrackPanel
      prefs={{
        color: "deepPurple",
        width: 350,
        height: 300,
        transitionDuration: 300
      }}
      trackID={"1123636d-542c-4423-a1f3-248dd720ff43"}
      currentTrackPanel={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      processing={nodes}
      noteResolution={1}
      onResolutionChange={action("onResolutionChange")}
      onGainChange={action("onGainChange")}
    />
  ))
  .add("open", () => (
    <TrackPanel
      prefs={{
        color: "deepPurple",
        width: 350,
        height: 300,
        transitionDuration: 300
      }}
      trackID={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      currentTrackPanel={"a7489eeb-dfc5-4e1e-8381-1d97e1e29cc7"}
      processing={nodes}
      noteResolution={1}
      onResolutionChange={action("onResolutionChange")}
      onGainChange={action("onGainChange")}
    />
  ))
