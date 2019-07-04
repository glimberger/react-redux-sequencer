import * as React from "react"

import Color, { MaterialColor } from "../../../utils/color/colorLibrary"

interface IProps {
    mode: string
    color: MaterialColor
    setPlayMode: () => void
    setEditMode: () => void
}

class ModeSwitch extends React.Component<IProps> {
    handleKeyUp = (e: KeyboardEvent) => {
        const code = e.which

        // 'e'
        if (code === 69) {
            this.props.setEditMode()
        }

        // 'p'
        if (code === 80) {
            this.props.setPlayMode()
        }
    }

    componentDidMount(): void {
        window.addEventListener("keyup", this.handleKeyUp)
    }

    componentWillUnmount(): void {
        window.removeEventListener("keyup", this.handleKeyUp)
    }

    render() {
        const { mode, color, setPlayMode, setEditMode } = this.props
        const containerStyles: React.CSSProperties = {
            height: "2.5rem",
            width: "6rem",
            display: "flex",
            color: Color.get100(color),
            border: `solid 3px ${Color.get100(color)}`,
            borderRadius: "3px",
            cursor: "pointer"
        }

        const textStyles: React.CSSProperties = {
            margin: "auto",
            fontWeight: 700,
            userSelect: "none"
        }

        return (
            <div
                style={containerStyles}
                onClick={() => {
                    if (mode === "PLAY") {
                        setEditMode()
                    }
                    if (mode === "EDIT") {
                        setPlayMode()
                    }
                }}
            >
                <span style={textStyles}>{mode}</span>
            </div>
        )
    }
}

export default ModeSwitch
