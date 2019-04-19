// @flow strict

type OptionsType = {
  latencyHint: "balanced" | "interactive" | "playback",
  sampleRate: number
}

const defaultOptions: OptionsType = {
  latencyHint: "playback",
  sampleRate: 44100
}

const createContext = (options: OptionsType = defaultOptions): AudioContext =>
  new (window.AudioContext || window.webkitAudioContext)(options)

export default createContext
