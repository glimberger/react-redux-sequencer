import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CellSettings from "./CellSettings"

storiesOf("CellSettings", module)
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
  .add("sixteenth note", () => (
    <CellSettings
      isActiveTrack={true}
      height={300}
      gutter={6}
      cellSize={36}
      noteResolution={1}
      scheduled={true}
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      activeCellBeat={6}
      color={"red"}
      scheduleTrackCell={action("scheduleTrackCell")}
    />
  ))
  .add("eighth note", () => (
    <CellSettings
      isActiveTrack={true}
      height={300}
      gutter={6}
      cellSize={36}
      noteResolution={2}
      scheduled={true}
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      activeCellBeat={6}
      color={"red"}
      scheduleTrackCell={action("scheduleTrackCell")}
    />
  ))
  .add("quarter note", () => (
    <CellSettings
      isActiveTrack={true}
      height={300}
      gutter={6}
      cellSize={36}
      noteResolution={4}
      scheduled={false}
      activeTrackID={"8ebdfbd8-4528-4e5e-932b-987c5405aec5"}
      activeCellBeat={6}
      color={"red"}
      scheduleTrackCell={action("scheduleTrackCell")}
    />
  ))
  .add("no active track", () => (
    <CellSettings
      isActiveTrack={false}
      height={300}
      gutter={6}
      cellSize={36}
      noteResolution={1}
      scheduled={true}
      activeTrackID={null}
      activeCellBeat={6}
      color={"red"}
      scheduleTrackCell={action("scheduleTrackCell")}
    />
  ))
