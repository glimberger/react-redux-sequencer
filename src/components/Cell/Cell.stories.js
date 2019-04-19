import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Cell from "./Cell"

storiesOf("Cell", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%  ",
        padding: "3rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("played + scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={true}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={true}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={true}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("played + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={false}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={false}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={false}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("not played + scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={true}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={true}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={true}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("not played + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={false}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={false}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={false}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("edited + scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={true}
        edited={true}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={false}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={false}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("edited + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={true}
        edited={true}
        noteResolution={1}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={true}
        scheduled={false}
        noteResolution={2}
        onClick={action("onClick")}
      />
      <Cell
        color={"deepPurple"}
        played={false}
        scheduled={false}
        noteResolution={3}
        onClick={action("onClick")}
      />
    </div>
  ))
