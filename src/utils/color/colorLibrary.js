// @flow strict

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

/**
 * @see https://material.io/tools/color
 * @see https://material.io/design/color/the-color-system.html#tools-for-picking-colors
 */
export default class Color {
  static data = {
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
      shade900: "#4a148c",
      shade900Dark: "#12005e",
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
      shade900: "#01579B",
      shade900Dark: "#002f6c",
      shadeA100: "#80D8FF",
      shadeA200: "#40C4FF",
      shadeA400: "#00b0ff",
      shadeA700: "#0091ea"
    },
    cyan: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    teal: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    green: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    lightGreen: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    lime: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    yellow: {
      shade50: "#fffde7",
      shade100: "#fff9c4",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ffee58",
      shade500: "#f44336",
      shade600: "#fdd835",
      shade700: "#fbc02d",
      shade800: "#c62828",
      shade900: "#f57f17",
      shade900Dark: "#7f0000",
      shadeA100: "#ffff8d",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#ffd600"
    },
    amber: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    orange: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    deepOrange: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
    },
    brown: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade200: "#ef9a9a",
      shade300: "#e57373",
      shade400: "#ef5350",
      shade500: "#f44336",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade800: "#c62828",
      shade900: "#b71c1c",
      shade900Dark: "#7f0000",
      shadeA100: "#ff8a80",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#d50000"
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
      shade900: "#212121",
      shade900Dark: "#000000",
      shadeA100: "#eeeeee",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#424242"
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
      shade900: "#263238",
      shade900Dark: "#000a12",
      shadeA100: "#b0bec5",
      shadeA200: "#ff5252",
      shadeA400: "#ff1744",
      shadeA700: "#37474f"
    }
  }

  static get50(key: MaterialColor): string {
    return Color.data[key].shade50
  }

  static get100(key: MaterialColor): string {
    return Color.data[key].shade100
  }

  static get200(key: MaterialColor): string {
    return Color.data[key].shade200
  }

  static get300(key: MaterialColor): string {
    return Color.data[key].shade300
  }

  static get400(key: MaterialColor): string {
    return Color.data[key].shade400
  }

  static get500(key: MaterialColor): string {
    return Color.data[key].shade500
  }

  static get600(key: MaterialColor): string {
    return Color.data[key].shade600
  }

  static get700(key: MaterialColor): string {
    return Color.data[key].shade700
  }

  static get800(key: MaterialColor): string {
    return Color.data[key].shade800
  }

  static get900(key: MaterialColor): string {
    return Color.data[key].shade900
  }

  static get900Dark(key: MaterialColor): string {
    return Color.data[key].shade900Dark
  }

  static getA100(key: MaterialColor): string {
    return Color.data[key].shadeA100
  }

  static getA200(key: MaterialColor): string {
    return Color.data[key].shadeA200
  }

  static getA400(key: MaterialColor): string {
    return Color.data[key].shadeA400
  }

  static getA700(key: MaterialColor): string {
    return Color.data[key].shadeA700
  }
}
