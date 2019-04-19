import { coordinates } from "./polar"

describe("coordinates", () => {
  it("should return when angle equals 0", () => {
    const coord = coordinates(35, 35, 35)

    const result = coord(0)

    expect(parseFloat(result.x.toFixed(2))).toEqual(35.0)
    expect(parseFloat(result.y.toFixed(2))).toEqual(70.0)
  })

  it("should return when angle equals 90", () => {
    const coord = coordinates(35, 35, 35)

    const result = coord(90)

    expect(parseFloat(result.x.toFixed(2))).toEqual(0.0)
    expect(parseFloat(result.y.toFixed(2))).toEqual(35.0)
  })

  it("should return when angle equals 180", () => {
    const coord = coordinates(35, 35, 35)

    const result = coord(180)

    expect(parseFloat(result.x.toFixed(2))).toEqual(35.0)
    expect(parseFloat(result.y.toFixed(2))).toEqual(0.0)
  })

  it("should return when angle equals 270", () => {
    const coord = coordinates(35, 35, 35)

    const result = coord(270)

    expect(parseFloat(result.x.toFixed(2))).toEqual(70.0)
    expect(parseFloat(result.y.toFixed(2))).toEqual(35.0)
  })
})
