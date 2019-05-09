// @flow strict
import * as React from "react"
// $FlowFixMe
import styled from "styled-components/macro"

import Color from "../../../utils/color/colorLibrary"
import Volume from "../../../audio/utils/Volume/Volume"

import type { MaterialColor } from "../../../utils/color/colorLibrary"

type Props = {
  width: number,
  height: number,
  color: MaterialColor,
  fontSize: number,
  value: number,
  onValueChange: (value: number) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 3px;
  background: ${({ color }) => Color.get900(color)};
`

const Range = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  margin: ${({ gutter }) => `${gutter}px ${gutter}px 0 ${gutter}px`};
`

const InputWrapper = styled.div`
  display: flex;
  transform: rotate(-90deg);
`

const Input = styled.input`
  width: ${({ height, gutter, fontSize }) => height - gutter * 3 - fontSize}px;
  height: ${({ width }) => width}px;
  margin: ${({ height, gutter, fontSize, width }) =>
      (height - gutter * 3 - fontSize - width) / 2.0}px
    0 0;
  background: transparent;
  border: none transparent;

  &,
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-runnable-track {
    height: ${({ trackWidth }) => trackWidth}px;
    background: ${({ color }) => Color.get900Dark(color)};
    border: none;
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: ${({ trackWidth }) => trackWidth}px;
    background: ${({ color }) => Color.get900Dark(color)};
    border: none;
    border-radius: 3px;
  }

  &::-ms-track {
    height: ${({ trackWidth }) => trackWidth}px;
    background: ${({ color }) => Color.get900Dark(color)};
    border: none;
    border-radius: 3px;
    color: transparent;
  }

  &::-ms-fill-lower {
    display: none;
  }

  &::-webkit-slider-thumb {
    cursor: grab;
    width: ${({ thumbHeight }) => thumbHeight}px;
    height: ${({ width, gutter }) => width - 2 * gutter}px;
    margin-top: ${({ width, trackWidth, gutter }) =>
      -(width - 2 * gutter - trackWidth) / 2.0}px;
    border: none;
    border-radius: 3px;
    background: ${({ color }) => Color.getA700(color)};
  }

  &::-moz-range-thumb {
    cursor: grab;
    width: ${({ thumbHeight }) => thumbHeight}px;
    height: ${({ width, gutter }) => width - 2 * gutter}px;
    border: none;
    border-radius: 3px;
    background: ${({ color }) => Color.getA700(color)};
  }

  &::-ms-thumb {
    cursor: grab;
    width: ${({ thumbHeight }) => thumbHeight}px;
    height: ${({ width, gutter }) => width - 2 * gutter}px;
    border: none;
    border-radius: 3px;
    background: ${({ color }) => Color.getA700(color)};
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &:focus {
    outline: none;

    &::-webkit-slider-runnable-track {
      background: #212121;
      border: none;
    }
    &::-moz-range-track {
      background: #212121;
      border: none;
    }
    &::-ms-track {
      background: #212121;
      border: none;
    }
  }

  &:hover {
    &::-webkit-slider-thumb {
      background: ${({ color }) => Color.getA400(color)};
    }
    &::-moz-range-thumb {
      background: ${({ color }) => Color.getA400(color)};
    }
    &::-ms-thumb {
      background: ${({ color }) => Color.getA400(color)};
    }
  }
`

const GainIndicator = styled.div`
  padding: ${({ gutter }) => gutter}px 0;
  color: ${({ color }) => Color.get100(color)};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 1;
  text-align: center;
`

class VerticalFader extends React.Component<Props> {
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value)

    this.props.onValueChange(value)
  }

  gutter = this.props.width * 0.2
  thumbHeight = this.props.width * 0.5
  trackWidth = this.props.width * 0.25

  render() {
    return (
      <Wrapper
        width={this.props.width}
        height={this.props.height}
        color={this.props.color}
      >
        <Range gutter={this.gutter}>
          <InputWrapper>
            <Input
              className="range"
              width={this.props.width}
              height={this.props.height}
              color={this.props.color}
              fontSize={this.props.fontSize}
              value={this.props.value}
              gutter={this.gutter}
              thumbHeight={this.thumbHeight}
              trackWidth={this.trackWidth}
              type="range"
              min={0}
              max={1}
              step={0.01}
              onChange={this.handleChange}
            />
          </InputWrapper>
        </Range>
        <GainIndicator
          color={this.props.color}
          fontSize={this.props.fontSize}
          gutter={this.gutter}
        >
          {Volume.toDBString(this.props.value)}
        </GainIndicator>
      </Wrapper>
    )
  }
}

export default VerticalFader
