import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CellPanel from "./CellPanel"

storiesOf("CellPanel", module)
  .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
  .add("default", () => (
    <CellPanel
      prefs={{ height: 200, transitionDuration: 500 }}
      currentCellPanel={null}
      trackID={"8ba96671-f8b4-45fc-8aa9-6f229154c5db"}
      currentBeat={4}
      cell={null}
      beat={0}
      color={"purple"}
      onCellClick={action("onCellClick")}
    />
  ))
  .add("open", () => (
    <CellPanel
      prefs={{ height: 200, transitionDuration: 500 }}
      currentCellPanel={{
        beat: 4,
        trackID: "8ba96671-f8b4-45fc-8aa9-6f229154c5db"
      }}
      trackID={"8ba96671-f8b4-45fc-8aa9-6f229154c5db"}
      currentBeat={4}
      cell={{ scheduled: true, midi: 69 }}
      beat={0}
      color={"purple"}
      onCellClick={action("onCellClick")}
    />
  ))
  .add("another track open", () => (
    <CellPanel
      prefs={{ height: 200, transitionDuration: 500 }}
      currentCellPanel={{
        beat: 4,
        trackID: "8ba96671-f8b4-45fc-8aa9-6f229154c5db"
      }}
      trackID={"caffb1af-fb96-49fd-bb31-d062cffb070b"}
      currentBeat={4}
      cell={{ scheduled: true, midi: 69 }}
      beat={0}
      color={"purple"}
      onCellClick={action("onCellClick")}
    />
  ))
