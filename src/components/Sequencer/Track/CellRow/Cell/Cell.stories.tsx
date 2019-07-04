import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Cell } from "./Cell"
import { PrefsProvider } from "../../../../context/sequencer-prefs"

storiesOf("ICell", module)
  .addDecorator(story => <PrefsProvider>{story()}</PrefsProvider>)
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
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        rendered={true}
        played={true}
        scheduled={true}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={true}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={true}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("played + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={false}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={false}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={false}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("not played + scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={true}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={true}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={true}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("not played + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={false}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={false}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={false}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("edited + scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={true}
        edited={true}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={true}
        edited={true}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={true}
        edited={true}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))
  .add("edited + not scheduled", () => (
    <div style={{ display: "flex" }}>
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={false}
        edited={true}
        noteResolution={1}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={true}
        scheduled={false}
        edited={true}
        noteResolution={2}
        gain={0.7}
        onClick={action("onClick")}
      />
      <Cell
        trackID={"foo"}
        beatNumber={0}
        activeTrackID={"bar"}
        color={"deepPurple"}
        gutter={6}
        played={false}
        scheduled={false}
        edited={true}
        noteResolution={4}
        gain={0.7}
        onClick={action("onClick")}
      />
    </div>
  ))