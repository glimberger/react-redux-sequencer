import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Color, { MaterialColor } from "../../../../utils/color/colorLibrary"

interface IProps {
  color: MaterialColor
  width: number
  soloed: boolean
  onClick: () => void
}

const StyledButton = styled.button<{
  width: number
  color: MaterialColor
  soloed: boolean
}>`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: ${({ color, soloed }) =>
    soloed ? Color.get50(color) : Color.get400(color)};
  text-align: center;
  line-height: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ color, soloed }) =>
    soloed ? Color.get900(color) : Color.get800(color)};

  &:hover {
    background-color: ${({ color, soloed }) =>
      soloed ? "white" : Color.get300(color)};
  }
`

export const SoloButtonMemo = React.memo<IProps>(function SoloButton(
  props: IProps
) {
  const buttonRef = React.createRef<HTMLButtonElement>()

  return (
    <StyledButton
      color={props.color}
      width={props.width}
      soloed={props.soloed}
      ref={buttonRef}
      onClick={event => {
        event.stopPropagation()
        props.onClick()
        // tslint:disable-next-line:no-unused-expression
        buttonRef.current && buttonRef.current.blur()
      }}
    >
      S
    </StyledButton>
  )
})

export default SoloButtonMemo
