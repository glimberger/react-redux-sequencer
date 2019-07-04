class Volume {
  static toGain(db: number) {
    if (db <= -70.0) {
      return 0
    }

    return Math.pow(10, db / 20.0)
  }

  static toDB(gain: number) {
    if (gain === 0) {
      return -100.0
    }

    return 20 * Math.log10(gain)
  }

  static toDBString(gain: number) {
    const db = Volume.toDB(gain)

    if (db <= -70) {
      return "-∞ dB"
    }

    return db.toFixed(1) + " dB"
  }
}

export default Volume
