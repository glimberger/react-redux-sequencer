import Volume from "./Volume"

describe("Volume", () => {
  describe("toGain", () => {
    it("should return a gain of 1 when input is 0", () => {
      expect(Volume.toGain(0.0)).toBeCloseTo(1.0, 2)
    })

    it("should return a gain of 0.5 when input is -6", () => {
      expect(Volume.toGain(-6.0)).toBeCloseTo(0.5, 2)
    })

    it("should return a gain of 0.25 when input is -12", () => {
      expect(Volume.toGain(-12.0)).toBeCloseTo(0.25, 2)
    })

    it("should return a gain of 0.125 when input is -18", () => {
      expect(Volume.toGain(-18.0)).toBeCloseTo(0.125, 2)
    })

    it("should return a gain of 0.0 when input is -70+", () => {
      expect(Volume.toGain(-70.0)).toEqual(0)
      expect(Volume.toGain(-100.0)).toEqual(0)
    })
  })

  describe("toDB", () => {
    it("should return ~0 when the input gain is 1", () => {
      expect(Volume.toDB(1.0)).toBeCloseTo(0, 1)
    })

    it("should return ~-6 when th e input gain is 0.5", () => {
      expect(Volume.toDB(0.5)).toBeCloseTo(-6, 1)
    })

    it("should return ~-12 when th e input gain is 0.25", () => {
      expect(Volume.toDB(0.25)).toBeCloseTo(-12, 1)
    })

    it("should return ~-18 when th e input gain is 0.125", () => {
      expect(Volume.toDB(0.125)).toBeCloseTo(-18, 0)
    })

    it("should return -100 when the input gain is 0", () => {
      expect(Volume.toDB(0)).toBe(-100)
    })
  })

  describe("toDBString", () => {
    it("should return 0dB when the input gain is 1", () => {
      expect(Volume.toDB(1.0)).toBeCloseTo(0, 1)
    })

    it("should return ~-6dB when th e input gain is 0.5", () => {
      expect(Volume.toDB(0.5)).toBeCloseTo(-6, 1)
    })

    it("should return -12dB when th e input gain is 0.25", () => {
      expect(Volume.toDB(0.25)).toBeCloseTo(-12, 1)
    })

    it("should return -18dB when th e input gain is 0.125", () => {
      expect(Volume.toDB(0.125)).toBeCloseTo(-18, 0)
    })

    it("should return -∞ when the input gain is 0", () => {
      expect(Volume.toDB(0)).toBe(-100)
    })
  })
})
