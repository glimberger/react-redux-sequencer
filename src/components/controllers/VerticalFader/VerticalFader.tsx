import * as React from "react"
// tslint:disable-next-line:no-submodule-imports
import styled from "styled-components/macro"

import Volume from "../../../audio/utils/Volume/Volume"
import Color, { MaterialColor } from "../../../utils/color/colorLibrary"

interface IProps {
    readonly width: number
    readonly height: number
    readonly color: MaterialColor
    readonly fontSize: number
    readonly value: number
    readonly onValueChange: (value: number) => void
}

const Wrapper = styled.div<{
    readonly width: number
    readonly height: number
    readonly color: MaterialColor
}>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: 3px;
    background: ${({ color }) => Color.get900(color)};
`

const Range = styled.div<{ gutter: number }>`
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    margin: ${({ gutter }) => `${gutter}px ${gutter}px 0 ${gutter}px`};
`

const InputWrapper = styled.div`
    display: flex;
    transform: rotate(-90deg);
`

const Input = styled.input<{
    readonly height: number
    readonly gutter: number
    readonly fontSize: number
    readonly width: number
    readonly trackWidth: number
    readonly color: MaterialColor
    readonly thumbHeight: number
}>`
    width: ${({ height, gutter, fontSize }) =>
        height - gutter * 3 - fontSize}px;
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
            background: ${({ color }: { color: MaterialColor }) =>
                Color.getA400(color)};
        }
        &::-moz-range-thumb {
            background: ${({ color }: { color: MaterialColor }) =>
                Color.getA400(color)};
        }
        &::-ms-thumb {
            background: ${({ color }: { color: MaterialColor }) =>
                Color.getA400(color)};
        }
    }
`

const GainIndicator = styled.div<{
    readonly gutter: number
    readonly color: MaterialColor
    readonly fontSize: number
}>`
    padding: ${({ gutter }) => gutter}px 0;
    color: ${({ color }) => Color.get100(color)};
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: 1;
    text-align: center;
`

const MemoizedVerticalFader = React.memo<IProps>(function VerticalFader(
    props: IProps
) {
    const handleChange = (e: React.ChangeEvent<any>) => {
        const value = parseFloat(e.currentTarget.value)

        props.onValueChange(value)
    }

    const gutter = props.width * 0.2
    const thumbHeight = props.width * 0.5
    const trackWidth = props.width * 0.25

    return (
        <Wrapper width={props.width} height={props.height} color={props.color}>
            <Range gutter={gutter}>
                <InputWrapper>
                    <Input
                        className="range"
                        width={props.width}
                        height={props.height}
                        color={props.color}
                        fontSize={props.fontSize}
                        value={props.value}
                        gutter={gutter}
                        thumbHeight={thumbHeight}
                        trackWidth={trackWidth}
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={handleChange}
                    />
                </InputWrapper>
            </Range>
            <GainIndicator
                color={props.color}
                fontSize={props.fontSize}
                gutter={gutter}
            >
                {Volume.toDBString(props.value)}
            </GainIndicator>
        </Wrapper>
    )
})

export default MemoizedVerticalFader
