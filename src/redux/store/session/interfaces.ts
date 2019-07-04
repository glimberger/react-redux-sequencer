import { MaterialColor } from "../../../utils/color/colorLibrary"
import { ISample } from "../sample/interfaces"
import { IInstrument } from "../instrument/interfaces"

export interface ISession {
  // tempo [20, 200]
  tempo: number

  // mater gain [0, 1]
  masterGain: number

  activeCellBeat: number | null

  matrix: {
    // track ID (UUIDv4)
    [trackID: string]: ICell[]
  }

  trackOrder: string[]

  activeTrackID: string | null

  tracks: {
    // track ID (UUIDv4)
    [trackID: string]: ITrack
  }

  instruments: {
    [instrumentID: string]: IInstrument
  }

  samples: {
    [sampleID: string]: ISample
  }
}

export interface ICell {
  // note scheduled or not
  scheduled: boolean

  // midi note
  midi: number

  // cell processing
  processing: IAudioProcessing
}

export type NoteResolution = 1 | 2 | 4

export interface ITracks {
  [trackID: string]: ITrack
}

export interface ITrack {
  // primary key (UUIDv4)
  id: string

  label: string

  // 1=16th note, 2=8th note, 4=quarter note
  noteResolution: NoteResolution

  // instrument ID (UUIDv4)
  instrumentID: string

  // track color
  color: MaterialColor

  // track processing
  processing: IAudioProcessing

  muted: boolean

  soloed: boolean
}

export interface IAudioProcessing {
  gain: IGainProcessing
  filter?: IFilterProcessing
  delay?: IDelayProcessing
  distorsion?: IDistorsionProcessing
}

export interface IGainProcessing {
  gain: number
}

export interface IFilterProcessing {
  enabled: boolean
  type: string
  frequency: number
  gain: number
  q?: number
}

export interface IDelayProcessing {
  enabled: boolean
  delayTime: number
}

export interface IDistorsionProcessing {
  enabled: boolean
  curve: Float32Array
  oversample?: string
}
