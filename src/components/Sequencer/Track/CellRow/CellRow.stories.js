import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CellRow from "./CellRow"

const getCells = () => [
  { scheduled: false, note: 69 },
  { scheduled: true, note: 69 },
  { scheduled: false, note: 69 },
  { scheduled: false, note: 69 },
  { scheduled: true, note: 69 },
  { scheduled: false, note: 69 },
  { scheduled: false, note: 69 },
  { scheduled: false, note: 69 }
]

storiesOf("CellRow", module)
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
  .add("sixteenth notes — active track", () => (
    <CellRow
      currentBeat={2}
      color="pink"
      noteResolution={1}
      trackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeTrackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeCellBeat={3}
      cells={getCells()}
      scheduleTrackCell={action("scheduleTrackCell")}
      setActiveCell={action("setActiveCell")}
      size={40}
      gutter={6}
    />
  ))
  .add("eighth notes — active track", () => (
    <CellRow
      currentBeat={2}
      color="pink"
      noteResolution={2}
      trackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeTrackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeCellBeat={3}
      cells={getCells()}
      scheduleTrackCell={action("scheduleTrackCell")}
      setActiveCell={action("setActiveCell")}
      size={40}
      gutter={6}
    />
  ))
  .add("quarter notes — active track", () => (
    <CellRow
      currentBeat={2}
      color="pink"
      noteResolution={4}
      trackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeTrackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeCellBeat={3}
      cells={getCells()}
      scheduleTrackCell={action("scheduleTrackCell")}
      setActiveCell={action("setActiveCell")}
      size={40}
      gutter={6}
    />
  ))
  .add("sixteenth notes", () => (
    <CellRow
      currentBeat={2}
      color="pink"
      noteResolution={1}
      trackID="3df04324-7628-479e-b513-618ba1ab6518"
      activeTrackID={null}
      activeCellBeat={3}
      cells={getCells()}
      scheduleTrackCell={action("scheduleTrackCell")}
      setActiveCell={action("setActiveCell")}
      size={40}
      gutter={6}
    />
  ))
