// @flow strict
import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type { Sample } from "../sample/types"
import type { Instrument } from "../instrument/types"

export type Session = {|
  // tempo [20, 200]
  tempo: number,

  // mater gain [0, 1]
  masterGain: number,

  matrix: {
    // track ID (UUIDv4)
    [trackID: string]: Array<{|
      // note scheduled or not
      scheduled: boolean,

      // midi note
      midi: number
    |}>
  },

  trackOrder: Array<string>,

  tracks: {
    // track ID (UUIDv4)
    [trackID: string]: Track
  },

  instruments: {
    [instrumentID: string]: Instrument
  },

  samples: {
    [sampleID: string]: Sample
  }
|}

export type NoteResolution = 1 | 2 | 4

export type Track = {|
  // primary key (UUIDv4)
  id: string,

  label: string,

  // 1=16th note, 2=8th note, 4=quarter note
  noteResolution: NoteResolution,

  // instrument ID (UUIDv4)
  instrumentID: string,

  // track color
  color: MaterialColor,

  // track processing
  processing: InstrumentProcessing
|}

export type InstrumentProcessing = {|
  gain: {| gain: number |},
  filter?: {|
    enabled: boolean,
    type: string,
    frequency: number,
    gain: number,
    q?: number
  |},
  delay?: {| enabled: boolean, delayTime: number |},
  distorsion?: {|
    enabled: boolean,
    curve: Float32Array,
    oversample?: string
  |}
|}
