// @flow strict

export type AudioContextOptions = {
  latencyHint: "balanced" | "interactive" | "playback",
  sampleRate: number
}

const defaultOptions: AudioContextOptions = {
  latencyHint: "playback",
  sampleRate: 44100
}

const createContext = (options: AudioContextOptions = defaultOptions): AudioContext =>
  new (window.AudioContext || window.webkitAudioContext)(options)

export default createContext
