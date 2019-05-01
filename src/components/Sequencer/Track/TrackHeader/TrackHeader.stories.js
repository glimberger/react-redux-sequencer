import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import TrackHeader from "./TrackHeader"

storiesOf("TrackHeader", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("default", () => (
    <TrackHeader
      color={"red"}
      height={60}
      width={400}
      gutter={6}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={false}
      soloed={false}
      gain={0.7}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
    />
  ))
  .add("muted", () => (
    <TrackHeader
      color={"pink"}
      height={36}
      width={300}
      gutter={6}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={true}
      soloed={false}
      gain={0.3}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
    />
  ))
  .add("soloed", () => (
    <TrackHeader
      color={"purple"}
      height={36}
      width={300}
      gutter={6}
      label={"Track number one"}
      trackID={"137a91b7-fa08-4419-8411-61c6b1463022"}
      muted={false}
      soloed={true}
      gain={0.4}
      toggleTrackPanel={action("toggleTrackPanel")}
      onMuteClick={action("onMuteClick")}
      onSoloClick={action("onSoloClick")}
      onTitleClick={action("onTitleClick")}
    />
  ))
