// @flow strict
import createContext from "../context/createContext"
import { IN_DEV } from "../../utils/env"

import type { Samples } from "../../redux/store/sample/types"
import type { Cell, Track, Tracks } from "../../redux/store/session/types"
import type {
  Instrument,
  Instruments
} from "../../redux/store/instrument/types"
import type { AudioContextOptions } from "../context/createContext"

type SampleAudioBufferMap = Map<string, AudioBuffer>
type AudioNodeMap = Map<string, AudioNode>

type TrackAudioNodeMap = Map<string, AudioNodeMap>

/**
 * Performs any audio processing
 */
class AudioProcessor {
  ctx: AudioContext

  masterGainNode: GainNode

  sampleAudioBufferMap: SampleAudioBufferMap
  trackAudioNodeMap: TrackAudioNodeMap

  constructor(options?: AudioContextOptions) {
    this.ctx = createContext(options)
    IN_DEV &&
      console.debug(
        "[AudioProcessor] audio context created — state = %s",
        this.ctx.state
      )

    this.masterGainNode = this.ctx.createGain()
    IN_DEV && console.debug("[AudioProcessor] master gain node created")
    this.masterGainNode.connect(this.ctx.destination)
    IN_DEV &&
      console.debug(
        "[AudioProcessor] master gain node connected to destination node"
      )

    this.sampleAudioBufferMap = new Map()
    this.trackAudioNodeMap = new Map()
  }

  setMasterGainNodeValue = (gain: number) => {
    const time = this.ctx.currentTime
    this.masterGainNode.gain.setValueAtTime(gain, time)
    console.debug("[AudioProcessor] master gain set to %d at %d s", gain, time)
  }

  setTrackGainNodeValue = (trackID: string, gain: number) => {
    const time = this.ctx.currentTime
    const audioNodes = this.trackAudioNodeMap.get(trackID)

    console.groupCollapsed(
      "[AudioProcessor] setTrackGainNodeValue",
      trackID,
      gain
    )

    console.assert(
      audioNodes instanceof Map,
      "audioNodes for track %s should be defined",
      trackID
    )

    if (!audioNodes) return

    const gainNode = audioNodes.get("gain")

    console.assert(
      gainNode instanceof GainNode,
      "gainNode for track %s should be defined",
      trackID
    )

    if (gainNode instanceof GainNode) {
      gainNode.gain.setValueAtTime(gain, time)
      console.debug("[AudioProcessor] track gain set to %d at %d s", gain, time)
    }

    console.groupEnd()
  }

  storeSampleAudioBuffers = async (
    samples: Samples,
    fetchBuffer: (url: string) => Promise<ArrayBuffer>
  ): Promise<void> => {
    const sampleIDs = Object.keys(samples).map(sampleID => sampleID)

    const audioBuffers = await Promise.all(
      sampleIDs.map(sampleID => {
        const { url } = samples[sampleID]

        return fetchBuffer(url)
          .then(arrayBuffer => this.ctx.decodeAudioData(arrayBuffer))
          .catch(error => console.error(error))
      })
    )

    audioBuffers.forEach((audioBuffer, idx) => {
      const sampleID = sampleIDs[idx]
      IN_DEV &&
        console.debug(
          "[AudioProcessor] audioBuffer for sample %s: %o",
          sampleID,
          audioBuffer
        )
      console.assert(
        audioBuffer instanceof AudioBuffer,
        "audioBuffer for sample %s should be defined",
        sampleID
      )

      if (audioBuffer) {
        this.sampleAudioBufferMap.set(sampleID, audioBuffer)
      }
    })
  }

  setTrackGainNode = (trackID: string, gain: number) => {
    IN_DEV &&
      console.groupCollapsed("[AudioProcessor] setTrackGainNode %s", trackID)

    const gainNode = this.ctx.createGain()
    IN_DEV && console.debug("[AudioProcessor] gain node created")

    gainNode.connect(this.masterGainNode)
    IN_DEV && console.debug("[AudioProcessor] gain node --> master gain node")

    const time = this.ctx.currentTime
    gainNode.gain.setValueAtTime(gain, time)
    IN_DEV &&
      console.debug("[AudioProcessor] gain node set to %d at %d", gain, time)

    const audioNodes =
      this.trackAudioNodeMap.get(trackID) || new Map<string, AudioNode>()
    audioNodes.set("gain", gainNode)

    this.trackAudioNodeMap.set(trackID, audioNodes)
    IN_DEV && console.debug("[AudioProcessor] gain node stored")

    IN_DEV && console.groupEnd()
  }

  playSample(
    beat: number,
    gain: number,
    note: number | null,
    trackID: string,
    tracks: { [p: string]: Track },
    instruments: { [p: string]: Instrument },
    matrix: { [p: string]: Array<Cell> }
  ) {
    const { instrumentID } = tracks[trackID]
    const { mapping } = instruments[instrumentID]
    const midi = note === null ? matrix[trackID][beat].midi : note
    const { sampleID, detune } = mapping["M" + midi]

    const audioBuffer = this.sampleAudioBufferMap.get(sampleID)

    IN_DEV && console.groupCollapsed("[AudioProcessor] playSample %s", sampleID)

    console.assert(
      audioBuffer instanceof AudioBuffer,
      "[AudioProcessor] audioBuffer for sample %s should be defined",
      sampleID
    )

    if (!audioBuffer) return

    const gainNode = this.ctx.createGain()
    IN_DEV && console.debug("[AudioProcessor] gain node created")

    gainNode.gain.value = gain
    IN_DEV && console.debug("[AudioProcessor] gain node set to %d", gain)

    const source = this.ctx.createBufferSource()
    IN_DEV && console.debug("[AudioProcessor] source node created")

    source.buffer = audioBuffer
    IN_DEV &&
      console.debug("[AudioProcessor] audioBuffer set to %o", audioBuffer)

    source.detune.value = detune
    IN_DEV && console.debug("[AudioProcessor] detune value set to %d", detune)

    source.connect(gainNode)
    IN_DEV && console.debug("[AudioProcessor] source node --> gain node")

    gainNode.connect(this.masterGainNode)
    IN_DEV && console.debug("[AudioProcessor] gain node --> master gain node")

    source.start(this.ctx.currentTime)
    console.debug("[AudioProcessor] source node started")

    IN_DEV && console.groupEnd()
  }

  scheduleNoteForTrack = (
    beatNumber: number,
    time: number,
    trackID: string,
    tracks: Tracks,
    instruments: Instruments,
    matrix: { [trackID: string]: Array<Cell> },
    isSoloActive: boolean,
    solos: { [trzckID: string]: boolean },
    mutes: { [trackID: string]: boolean },
    tempo: number
  ) => {
    const { instrumentID, noteResolution } = tracks[trackID]
    const { mapping } = instruments[instrumentID]
    const { scheduled, midi, processing } = matrix[trackID][beatNumber]

    // check note resolution
    if (beatNumber % noteResolution) return

    // check solo
    if (isSoloActive && !solos[trackID]) return

    // check mute
    if (mutes[trackID]) return

    // check if scheduled
    if (scheduled === false) return

    const { detune, sampleID } = mapping["M" + midi]
    const audioBuffer = this.sampleAudioBufferMap.get(sampleID)

    console.assert(
      audioBuffer instanceof AudioBuffer,
      "'audioBuffer' should be an instance of AudioBuffer."
    )

    if (!audioBuffer instanceof AudioBuffer) return

    const audioNodes = this.trackAudioNodeMap.get(trackID)

    console.assert(
      audioNodes instanceof Map,
      "Track audio node map entry for track %s should be defined",
      trackID
    )

    if (!audioNodes) return

    const trackGainNode = audioNodes.get("gain")

    console.assert(
      trackGainNode instanceof GainNode,
      "Gain node for track %s should be defined",
      trackID
    )

    if (
      audioBuffer instanceof AudioBuffer &&
      trackGainNode instanceof GainNode
    ) {
      const cellGainNode: GainNode = this.ctx.createGain()
      cellGainNode.gain.setValueAtTime(processing.gain.gain, time)

      // check for note off - fade
      const secondsPerBeat = 60.0 / tempo
      const nextCellAtResolution =
        matrix[trackID][(beatNumber + noteResolution) % 64]
      if (
        nextCellAtResolution.scheduled &&
        midi === nextCellAtResolution.midi
      ) {
        cellGainNode.gain.setTargetAtTime(
          0,
          time + 0.25 * secondsPerBeat * (noteResolution - 0.2),
          0.05
        )
      }

      const source: AudioBufferSourceNode = this.ctx.createBufferSource()
      source.detune.value = detune
      source.buffer = audioBuffer
      source.connect(cellGainNode)
      cellGainNode.connect(trackGainNode)

      source.start(time)
    }
  }

  close = () => this.ctx.close()
}

export default AudioProcessor
