import * as React from "react"

import styles from "./Fader.module.css"
import { MaterialColor } from "../../../utils/color/colorLibrary"

interface IProps {
  orientation: "vertical" | "horizontal"
  min: number
  max: number
  step: number
  color: MaterialColor
  size: number
  value: number
  onChange: (e: React.ChangeEvent<any>) => void
}

Fader.defaultProps = {
  size: 168,
  orientation: "horizontal",
  min: 0,
  max: 100,
  step: 1
}

function Fader({
  orientation,
  min,
  max,
  step,
  color,
  size,
  value,
  onChange
}: IProps) {
  // thumb offset (px)
  const thumbOffset = 6
  const cssStyles: React.CSSProperties = {
    width: size < 168 ? "168px" : size + "px",
    marginLeft: size < 168 ? "-166px" : thumbOffset - size + "px"
  }

  const InputVerticalClass = "InputVertical_" + color
  const InputClass = "Input_" + color

  return (
    <div
      className={
        orientation === "vertical" ? styles.ContainerVertical : styles.Container
      }
      style={{ width: cssStyles.width }}
    >
      <input
        className={
          orientation === "vertical"
            // @ts-ignore
            ? styles[InputVerticalClass]
            // @ts-ignore
            : styles[InputClass]
        }
        style={{
          marginLeft: orientation === "vertical" ? cssStyles.marginLeft : "0",
          marginTop: orientation === "vertical" ? "0" : thumbOffset + "px"
        }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Fader
