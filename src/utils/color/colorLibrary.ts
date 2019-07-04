export type MaterialColor =
    | "red"
    | "pink"
    | "purple"
    | "deepPurple"
    | "indigo"
    | "blue"
    | "lightBlue"
    | "cyan"
    | "teal"
    | "green"
    | "lightGreen"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "deepOrange"
    | "brown"
    | "grey"
    | "blueGrey"

export const colors: MaterialColor[] = [
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange",
    "brown",
    "grey",
    "blueGrey"
]

export const trackColors: MaterialColor[] = [
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange"
]

const data = {
    red: {
        shade50: "#ffebee",
        shade100: "#ffcdd2",
        shade200: "#ef9a9a",
        shade300: "#e57373",
        shade400: "#ef5350",
        shade500: "#f44336",
        shade600: "#e53935",
        shade700: "#d32f2f",
        shade800: "#c62828",
        shade800Dark: "#8e0000",
        shade900: "#b71c1c",
        shade900Dark: "#7f0000",
        shadeA100: "#ff8a80",
        shadeA200: "#ff5252",
        shadeA400: "#ff1744",
        shadeA700: "#d50000"
    },
    pink: {
        shade50: "#fce4ec",
        shade100: "#f8bbd0",
        shade200: "#f48fb1",
        shade300: "#f06292",
        shade400: "#ec407a",
        shade500: "#e91e63",
        shade600: "#d81b60",
        shade700: "#c2185b",
        shade800: "#ad1457",
        shade800Dark: "#78002e",
        shade900: "#880e4f",
        shade900Dark: "#560027",
        shadeA100: "#ff80ab",
        shadeA200: "#ff4081",
        shadeA400: "#f50057",
        shadeA700: "#c51162"
    },
    purple: {
        shade50: "#f3e5f5",
        shade100: "#e1bee7",
        shade200: "#ce93d8",
        shade300: "#ba68c8",
        shade400: "#ab47bc",
        shade500: "#9c27b0",
        shade600: "#8e24aa",
        shade700: "#7b1fa2",
        shade800: "#6a1b9a",
        shade800Dark: "#38006b",
        shade900: "#4a148c",
        shade900Dark: "#38006b",
        shadeA100: "#ea80fc",
        shadeA200: "#e040fb",
        shadeA400: "#d500f9",
        shadeA700: "#aa00ff"
    },
    deepPurple: {
        shade50: "#ede7f6",
        shade100: "#d1c4e9",
        shade200: "#b39ddb",
        shade300: "#9575cd",
        shade400: "#7e57c2",
        shade500: "#673ab7",
        shade600: "#5e35b1",
        shade700: "#512da8",
        shade800: "#4527a0",
        shade800Dark: "#000070",
        shade900: "#311b92",
        shade900Dark: "#000063",
        shadeA100: "#b388ff",
        shadeA200: "#7c4dff",
        shadeA400: "#651fff",
        shadeA700: "#6200ea"
    },
    indigo: {
        shade50: "#e8eaf6",
        shade100: "#c5cae9",
        shade200: "#9fa8da",
        shade300: "#7986cb",
        shade400: "#5c6bc0",
        shade500: "#3f51b5",
        shade600: "#3949ab",
        shade700: "#303f9f",
        shade800: "#283593",
        shade800Dark: "#000070",
        shade900: "#1a237e",
        shade900Dark: "#000051",
        shadeA100: "#8c9eff",
        shadeA200: "#536dfe",
        shadeA400: "#3d5afe",
        shadeA700: "#304ffe"
    },
    blue: {
        shade50: "#e3f2fd",
        shade100: "#bbdefb",
        shade200: "#90caf9",
        shade300: "#64B5F6",
        shade400: "#42a5f5",
        shade500: "#2196f3",
        shade600: "#1e88e5",
        shade700: "#1976d2",
        shade800: "#1565c0",
        shade800Dark: "#003c8f",
        shade900: "#0d47a1",
        shade900Dark: "#002171",
        shadeA100: "#82b1ff",
        shadeA200: "#448aff",
        shadeA400: "#2979ff",
        shadeA700: "#2962ff"
    },
    lightBlue: {
        shade50: "#E1F5FE",
        shade100: "#B3E5FC",
        shade200: "#81D4FA",
        shade300: "#4FC3F7",
        shade400: "#29B6F6",
        shade500: "#03A9F4",
        shade600: "#039BE5",
        shade700: "#0288D1",
        shade800: "#0277BD",
        shade800Dark: "#004c8c",
        shade900: "#01579B",
        shade900Dark: "#002f6c",
        shadeA100: "#80D8FF",
        shadeA200: "#40C4FF",
        shadeA400: "#00b0ff",
        shadeA700: "#0091ea"
    },
    cyan: {
        shade50: "#e0f7fa",
        shade100: "#b2ebf2",
        shade200: "#80deea",
        shade300: "#4dd0e1",
        shade400: "#26c6da",
        shade500: "#00bcd4",
        shade600: "#00acc1",
        shade700: "#0097a7",
        shade800: "#00838f",
        shade800Dark: "#004c8c",
        shade900: "#006064",
        shade900Dark: "#00363a",
        shadeA100: "#84ffff",
        shadeA200: "#18ffff",
        shadeA400: "#00e5ff",
        shadeA700: "#00b8d4"
    },
    teal: {
        shade50: "#e0f2f1",
        shade100: "#b2dfdb",
        shade200: "#80cbc4",
        shade300: "#4db6ac",
        shade400: "#26a69a",
        shade500: "#009688",
        shade600: "#00897b",
        shade700: "#00796b",
        shade800: "#00695c",
        shade800Dark: "#003d33",
        shade900: "#004d40",
        shade900Dark: "#00251a",
        shadeA100: "#a7ffeb",
        shadeA200: "#64ffda",
        shadeA400: "#1de9b6",
        shadeA700: "#00bfa5"
    },
    green: {
        shade50: "#E8F5E9",
        shade100: "#C8E6C9",
        shade200: "#A5D6A7",
        shade300: "#81C784",
        shade400: "#66BB6A",
        shade500: "#4CAF50",
        shade600: "#43A047",
        shade700: "#388E3C",
        shade800: "#2E7D32",
        shade800Dark: "#005005",
        shade900: "#1B5E20",
        shade900Dark: "#003300",
        shadeA100: "#B9F6CA",
        shadeA200: "#69F0AE",
        shadeA400: "#00E676",
        shadeA700: "#00C853"
    },
    lightGreen: {
        shade50: "#F1F8E9",
        shade100: "#DCEDC8",
        shade200: "#C5E1A5",
        shade300: "#AED581",
        shade400: "#9CCC65",
        shade500: "#8BC34A",
        shade600: "#7CB342",
        shade700: "#689F38",
        shade800: "#558B2F",
        shade800Dark: "#255d00",
        shade900: "#33691E",
        shade900Dark: "#003d00",
        shadeA100: "#CCFF90",
        shadeA200: "#B2FF59",
        shadeA400: "#76FF03",
        shadeA700: "#64DD17"
    },
    lime: {
        shade50: "#F9FBE7",
        shade100: "#F0F4C3",
        shade200: "#E6EE9C",
        shade300: "#DCE775",
        shade400: "#D4E157",
        shade500: "#CDDC39",
        shade600: "#C0CA33",
        shade700: "#AFB42B",
        shade800: "#9E9D24",
        shade800Dark: "#6c6f00",
        shade900: "#827717",
        shade900Dark: "#524c00",
        shadeA100: "#F4FF81",
        shadeA200: "#EEFF41",
        shadeA400: "#C6FF00",
        shadeA700: "#AEEA00"
    },
    yellow: {
        shade50: "#FFFDE7",
        shade100: "#FFF9C4",
        shade200: "#FFF59D",
        shade300: "#FFF176",
        shade400: "#FFEE58",
        shade500: "#FFEB3B",
        shade600: "#FDD835",
        shade700: "#FBC02D",
        shade800: "#F9A825",
        shade800Dark: "#c17900",
        shade900: "#F57F17",
        shade900Dark: "#bc5100",
        shadeA100: "#FFFF8D",
        shadeA200: "#FFFF00",
        shadeA400: "#FFEA00",
        shadeA700: "#FFD600"
    },
    amber: {
        shade50: "#FFF8E1",
        shade100: "#FFECB3",
        shade200: "#FFE082",
        shade300: "#FFD54F",
        shade400: "#FFCA28",
        shade500: "#FFC107",
        shade600: "#FFB300",
        shade700: "#FFA000",
        shade800: "#FF8F00",
        shade800Dark: "#c56000",
        shade900: "#FF6F00",
        shade900Dark: "#c43e00",
        shadeA100: "#FFE57F",
        shadeA200: "#FFD740",
        shadeA400: "#FFC400",
        shadeA700: "#FFAB00"
    },
    orange: {
        shade50: "#FFF3E0",
        shade100: "#FFE0B2",
        shade200: "#FFCC80",
        shade300: "#FFB74D",
        shade400: "#FFA726",
        shade500: "#FF9800",
        shade600: "#FB8C00",
        shade700: "#F57C00",
        shade800: "#EF6C00",
        shade800Dark: "#b53d00",
        shade900: "#E65100",
        shade900Dark: "#ac1900",
        shadeA100: "#FFD180",
        shadeA200: "#FFAB40",
        shadeA400: "#FF9100",
        shadeA700: "#FF6D00"
    },
    deepOrange: {
        shade50: "#FBE9E7",
        shade100: "#FFCCBC",
        shade200: "#FFAB91",
        shade300: "#FF8A65",
        shade400: "#FF7043",
        shade500: "#FF5722",
        shade600: "#F4511E",
        shade700: "#E64A19",
        shade800: "#D84315",
        shade800Dark: "#b53d00",
        shade900: "#BF360C",
        shade900Dark: "#870000",
        shadeA100: "#FF9E80",
        shadeA200: "#FF6E40",
        shadeA400: "#FF3D00",
        shadeA700: "#DD2C00"
    },
    brown: {
        shade50: "#EFEBE9",
        shade100: "#D7CCC8",
        shade200: "#BCAAA4",
        shade300: "#A1887F",
        shade400: "#8D6E63",
        shade500: "#795548",
        shade600: "#6D4C41",
        shade700: "#5D4037",
        shade800: "#4E342E",
        shade800Dark: "#260e04",
        shade900: "#3E2723",
        shade900Dark: "#1b0000",
        shadeA100: "#D7CCC8",
        shadeA200: "#BCAAA4",
        shadeA400: "#8D6E63",
        shadeA700: "#5D4037"
    },
    grey: {
        shade50: "#FAFAFA",
        shade100: "#F5F5F5",
        shade200: "#EEEEEE",
        shade300: "#E0E0E0",
        shade400: "#BDBDBD",
        shade500: "#9E9E9E",
        shade600: "#757575",
        shade700: "#616161",
        shade800: "#424242",
        shade800Dark: "#1b1b1b",
        shade900: "#212121",
        shade900Dark: "#000000",
        shadeA100: "#F5F5F5",
        shadeA200: "#EEEEEE",
        shadeA400: "#BDBDBD",
        shadeA700: "#616161"
    },
    blueGrey: {
        shade50: "#ECEFF1",
        shade100: "#CFD8DC",
        shade200: "#B0BEC5",
        shade300: "#90A4AE",
        shade400: "#78909C",
        shade500: "#607D8B",
        shade600: "#546E7A",
        shade700: "#455A64",
        shade800: "#37474F",
        shade800Dark: "#102027",
        shade900: "#263238",
        shade900Dark: "#000a12",
        shadeA100: "#CFD8DC",
        shadeA200: "#B0BEC5",
        shadeA400: "#78909C",
        shadeA700: "#455A64"
    }
}

/**
 * @see https://material.io/tools/color
 * @see https://material.io/design/color/the-color-system.html#tools-for-picking-colors
 */
export default class Color {
    static RED: MaterialColor = "red"
    static PINK: MaterialColor = "pink"
    static PURPLE: MaterialColor = "purple"
    static DEEP_PURPLE: MaterialColor = "deepPurple"
    static INDIGO: MaterialColor = "indigo"
    static BLUE: MaterialColor = "blue"
    static LIGHT_BLUE: MaterialColor = "lightBlue"
    static CYAN: MaterialColor = "cyan"
    static TEAL: MaterialColor = "teal"
    static GREEN: MaterialColor = "green"
    static LIGHT_GREEN: MaterialColor = "lightGreen"
    static LIME: MaterialColor = "lime"
    static YELLOW: MaterialColor = "yellow"
    static AMBER: MaterialColor = "amber"
    static ORANGE: MaterialColor = "orange"
    static DEEP_ORANGE: MaterialColor = "deepOrange"
    static BROWN: MaterialColor = "brown"
    static GREY: MaterialColor = "grey"
    static BLUE_GREY: MaterialColor = "blueGrey"

    static get50(key: MaterialColor): string {
        return data[key].shade50
    }

    static get100(key: MaterialColor): string {
        return data[key].shade100
    }

    static get200(key: MaterialColor): string {
        return data[key].shade200
    }

    static get300(key: MaterialColor): string {
        return data[key].shade300
    }

    static get400(key: MaterialColor): string {
        return data[key].shade400
    }

    static get500(key: MaterialColor): string {
        return data[key].shade500
    }

    static get600(key: MaterialColor): string {
        return data[key].shade600
    }

    static get700(key: MaterialColor): string {
        return data[key].shade700
    }

    static get800(key: MaterialColor): string {
        return data[key].shade800
    }

    static get800Dark(key: MaterialColor): string {
        return data[key].shade800Dark
    }

    static get900(key: MaterialColor): string {
        return data[key].shade900
    }

    static get900Dark(key: MaterialColor): string {
        return data[key].shade900Dark
    }

    static getA100(key: MaterialColor): string {
        return data[key].shadeA100
    }

    static getA200(key: MaterialColor): string {
        return data[key].shadeA200
    }

    static getA400(key: MaterialColor): string {
        return data[key].shadeA400
    }

    static getA700(key: MaterialColor): string {
        return data[key].shadeA700
    }
}

export function hexToRgb(
    hex: string
): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null
}
