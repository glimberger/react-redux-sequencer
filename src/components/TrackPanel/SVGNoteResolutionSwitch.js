// @flow strict
import React from "react"
import CellColor from "../../utils/color/colorLibrary"
import type { MaterialColor } from "../../utils/color/colorLibrary"
import type { NoteResolution } from "../../redux/store/session/types"

import styles from "./SVGNoteResolutionSwitch.module.css"

type Props = {
  position: { x: number, y: number },
  width: number,
  height: number,
  color: MaterialColor,
  noteResolution: NoteResolution,
  onResolutionChange: (resolution: NoteResolution) => void
}

function SVGNoteResolutionSwitch({
  position,
  color,
  noteResolution,
  onResolutionChange
}: Props) {
  return (
    <g>
      <rect
        x={position.x}
        y={position.y}
        width="110"
        height="30"
        rx="3"
        fill={CellColor.get700(color)}
      />
      <g className={styles.Switch} onClick={() => onResolutionChange(1)}>
        <rect
          x={position.x + 5}
          y={position.y + 5}
          width="30"
          height="20"
          rx="3"
          fill={
            noteResolution === 1
              ? CellColor.get100(color)
              : CellColor.get400(color)
          }
        />
        <text
          className={styles.Text}
          x={position.x + 20}
          y={position.y + 20}
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill={CellColor.get900(color)}
        >
          &#x266C;
        </text>
      </g>
      <g className={styles.Switch} onClick={() => onResolutionChange(2)}>
        <rect
          x={position.x + 40}
          y={position.y + 5}
          width="30"
          height="20"
          rx="3"
          fill={
            noteResolution === 2
              ? CellColor.get100(color)
              : CellColor.get400(color)
          }
        />
        <text
          className={styles.Text}
          x={position.x + 54}
          y={position.y + 20}
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill={CellColor.get900(color)}
        >
          &#x266B;
        </text>
      </g>
      <g className={styles.Switch} onClick={() => onResolutionChange(4)}>
        <rect
          x={position.x + 75}
          y={position.y + 5}
          width="30"
          height="20"
          rx="3"
          fill={
            noteResolution === 4
              ? CellColor.get100(color)
              : CellColor.get400(color)
          }
        />
        <text
          className={styles.Text}
          x={position.x + 90}
          y={position.y + 20}
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fill={CellColor.get900(color)}
        >
          &#x2669;
        </text>
      </g>
    </g>
  )
}

export default SVGNoteResolutionSwitch
