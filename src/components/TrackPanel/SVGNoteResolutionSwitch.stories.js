import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import SVGNoteResolutionSwitch from "./SVGNoteResolutionSwitch"

import styles from "./SVGNoteResolutionSwitch.module.css"

storiesOf("SVGNoteResolutionSwitch", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%  ",
        padding: "1rem",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("quarter note", () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.Svg}
      width={163}
      height={40}
      fill="none"
    >
      <SVGNoteResolutionSwitch
        noteResolution={1}
        height={40}
        width={163}
        position={{ x: 0, y: 0 }}
        color={"indigo"}
        onResolutionChange={action("onResolutionChange")}
      />
    </svg>
  ))
  .add("eighth note", () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.Svg}
      width={163}
      height={40}
      fill="none"
    >
      <SVGNoteResolutionSwitch
        noteResolution={2}
        height={40}
        width={163}
        position={{ x: 0, y: 0 }}
        color={"indigo"}
        onResolutionChange={action("onResolutionChange")}
      />
    </svg>
  ))
  .add("sixteenth note", () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.Svg}
      width={163}
      height={40}
      fill="none"
    >
      <SVGNoteResolutionSwitch
        noteResolution={4}
        height={40}
        width={163}
        position={{ x: 0, y: 0 }}
        color={"indigo"}
        onResolutionChange={action("onResolutionChange")}
      />
    </svg>
  ))
