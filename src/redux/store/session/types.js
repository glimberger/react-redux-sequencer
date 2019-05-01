// @flow strict
import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type { Sample } from "../sample/types"
import type { Instrument } from "../instrument/types"

export type Session = {|
  // tempo [20, 200]
  tempo: number,

  // mater gain [0, 1]
  masterGain: number,

  activeCellBeat: number | null,

  matrix: {
    // track ID (UUIDv4)
    [trackID: string]: Array<Cell>
  },

  trackOrder: Array<string>,

  activeTrackID: string | null,

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

export type Cell = {|
  // note scheduled or not
  scheduled: boolean,

  // midi note
  midi: number
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
  processing: InstrumentProcessing,

  muted: boolean,

  soloed: boolean
|}

export type InstrumentProcessing = {|
  gain: GainProcessing,
  filter?: FilterProcessing,
  delay?: DelayProcessing,
  distorsion?: DistorsionProcessing
|}

export type GainProcessing = {|
  gain: number
|}

export type FilterProcessing = {|
  enabled: boolean,
  type: string,
  frequency: number,
  gain: number,
  q?: number
|}

export type DelayProcessing = {| enabled: boolean, delayTime: number |}

export type DistorsionProcessing = {|
  enabled: boolean,
  curve: Float32Array,
  oversample?: string
|}
