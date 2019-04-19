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
 */
export default class CellColor {
  static data = {
    red: {
      shade50: "#ffebee",
      shade100: "#ffcdd2",
      shade400: "#ef5350",
      shade600: "#e53935",
      shade700: "#d32f2f",
      shade900: "#b71c1c",
      shadeA100: "#ff8a80",
      shadeA700: "#d50000"
    },
    pink: {
      shade50: "#fce4ec",
      shade100: "#f8bbd0",
      shade400: "#ec407a",
      shade600: "#d81b60",
      shade700: "#c2185b",
      shade900: "#880e4f",
      shadeA100: "#ff80ab",
      shadeA700: "#c51162"
    },
    purple: {
      shade50: "#f3e5f5",
      shade100: "#e1bee7",
      shade400: "#ab47bc",
      shade600: "#8e24aa",
      shade700: "#7b1fa2",
      shade900: "#4a148c",
      shadeA100: "#ea80fc",
      shadeA700: "#aa00ff"
    },
    deepPurple: {
      shade50: "#ede7f6",
      shade100: "#d1c4e9",
      shade400: "#7e57c2",
      shade600: "#5e35b1",
      shade700: "#512da8",
      shade900: "#311b92",
      shadeA100: "#b388ff",
      shadeA700: "#6200ea"
    },
    indigo: {
      shade50: "#e8eaf6",
      shade100: "#c5cae9",
      shade400: "#5c6bc0",
      shade600: "#3949ab",
      shade700: "#303f9f",
      shade900: "#1a237e",
      shadeA100: "#8c9eff",
      shadeA700: "#304ffe"
    },
    blue: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    lightBlue: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    cyan: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    teal: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    green: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    lightGreen: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    lime: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#fbc02d",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    yellow: {
      shade50: "#fffde7",
      shade100: "#fff9c4",
      shade400: "#ffee58",
      shade600: "#fdd835",
      shade700: "#fbc02d",
      shade900: "#f57f17",
      shadeA100: "#ffff8d",
      shadeA700: "#ffd600"
    },
    amber: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    orange: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    deepOrange: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    brown: {
      shade50: "#fff",
      shade100: "#fff",
      shade400: "#fff",
      shade600: "#fff",
      shade700: "#d32f2f",
      shade900: "#fff",
      shadeA100: "#fff",
      shadeA700: "#fff"
    },
    grey: {
      shade50: "#fafafa",
      shade100: "#f5f5f5",
      shade400: "#bdbdbd",
      shade600: "#757575",
      shade700: "#616161",
      shade900: "#212121",
      shadeA100: "#eeeeee",
      shadeA700: "#424242"
    },
    blueGrey: {
      shade50: "#eceff1",
      shade100: "#cfd8dc",
      shade400: "#78909c",
      shade600: "#546e7a",
      shade700: "#455a64",
      shade900: "#263238",
      shadeA100: "#b0bec5",
      shadeA700: "#37474f"
    }
  }

  static get50(key: MaterialColor): string {
    return CellColor.data[key].shade50
  }

  static get100(key: MaterialColor): string {
    return CellColor.data[key].shade100
  }

  static get400(key: MaterialColor): string {
    return CellColor.data[key].shade400
  }

  static get600(key: MaterialColor): string {
    return CellColor.data[key].shade600
  }

  static get700(key: MaterialColor): string {
    return CellColor.data[key].shade700
  }
  static get900(key: MaterialColor): string {
    return CellColor.data[key].shade900
  }

  static getA100(key: MaterialColor): string {
    return CellColor.data[key].shadeA100
  }

  static getA700(key: MaterialColor): string {
    return CellColor.data[key].shadeA700
  }
}
