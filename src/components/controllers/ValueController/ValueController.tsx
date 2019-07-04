import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

// import * as styles from "./ValueController.module.css"
import Color, { MaterialColor } from "../../../utils/color/colorLibrary"

interface IProps {
  value: number
  onChange: (value: number) => void
  amount: number
  min: number
  max: number
  prefs: { color: MaterialColor }
}

const StyledDisplay = styled.text`
  user-select: none;
`

const StyledButtonSVGPath = styled.path`
cursor: pointer;
`

function ValueController({ value, onChange, amount, min, max }: IProps) {
  const increment = () => {
    const nextValue = value + amount > max ? max : value + amount

    return onChange(nextValue)
  }

  const decrement = () => {
    const nextValue = value - amount < min ? min : value - amount

    return onChange(nextValue)
  }

  return (
    <div>
      <svg
        width="129"
        height="40"
        viewBox="0 0 129 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="129" height="40" rx="3" fill={Color.get700("blueGrey")} />
        <StyledDisplay
          x={80}
          y={26}
          fontSize="16"
          fontWeight={"normal"}
          textAnchor="end"
          fill="#eceff1"
        >
          {`${value} BPM`}
        </StyledDisplay>
        {/*<text*/}
        {/*  className={styles.Display}*/}
        {/*  x={80}*/}
        {/*  y={26}*/}
        {/*  fontSize="16"*/}
        {/*  fontWeight={"normal"}*/}
        {/*  textAnchor="end"*/}
        {/*  fill="#eceff1"*/}
        {/*>*/}
        {/*  {`${value} BPM`}*/}
        {/*</text>*/}
        <StyledButtonSVGPath d="M108 6L120.124 16.5H95.8756L108 6Z"
                             fill={Color.get900("blueGrey")}
                             onClick={increment} />
        {/*<path*/}
        {/*  className={styles.Button}*/}
        {/*  d="M108 6L120.124 16.5H95.8756L108 6Z"*/}
        {/*  fill={Color.get900("blueGrey")}*/}
        {/*  onClick={increment}*/}
        {/*/>*/}
        <StyledButtonSVGPath d="M108 34L95.8756 23.5L120.124 23.5L108 34Z"
                             fill={Color.get900("blueGrey")}
                             onClick={decrement}/>
        {/*<path*/}
        {/*  className={styles.Button}*/}
        {/*  d="M108 34L95.8756 23.5L120.124 23.5L108 34Z"*/}
        {/*  fill={Color.get900("blueGrey")}*/}
        {/*  onClick={decrement}*/}
        {/*/>*/}
      </svg>
    </div>
  )
}

export default ValueController
