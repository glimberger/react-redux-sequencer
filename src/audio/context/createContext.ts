export type LatencyHint = "balanced" | "interactive" | "playback"
export interface IAudioContextOptions {
    latencyHint: LatencyHint
    sampleRate: number
}

const defaultOptions: IAudioContextOptions = {
    latencyHint: "playback",
    sampleRate: 44100
}

const createContext = (options: IAudioContextOptions = defaultOptions) =>
    new AudioContext(options)

export default createContext
