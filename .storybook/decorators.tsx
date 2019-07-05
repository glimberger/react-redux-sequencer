import React from "react"
import { Provider } from "react-redux"

import { PrefsProvider } from "../src/components/context/sequencer-prefs"
import configureStore, { IAppState } from "../src/redux/store/configureStore"
import { RenderFunction } from "@storybook/react"
import colorLibrary from "../src/utils/color/colorLibrary"

export const withContainer = (story: RenderFunction) => (
  <section
    style={{
      width: "100%",
      height: "100%",
      padding: "2rem",
      backgroundColor: "#1e1f26"
    }}
  >
    {story()}
  </section>
)

export const withPrefsProvider = (story: RenderFunction) => (
  <PrefsProvider>{story()}</PrefsProvider>
)

export const withReduxProvider = (state: IAppState) => {
  const store = configureStore(state)
  return (story: RenderFunction) => <Provider store={store}>{story()}</Provider>
}

const matrix = Array.from(Array(64).keys()).map(beat => ({
  scheduled: beat % 3 === 0,
  midi: 69,
  processing: { gain: { gain: 1 } }
}))

export const stateFixture: IAppState = {
  audio: {
    currentBeat: 0,
    ready: true,
    playing: false,
    mode: "EDIT",
    events: []
  },
  session: {
    tempo: 120,
    masterGain: 1,
    activeTrackID: "1",
    activeCellBeat: 12,
    trackOrder: ["1", "2", "3", "4"],
    tracks: {
      "1": {
        id: "1",
        label: "Track 1",
        muted: false,
        soloed: false,
        instrumentID: "1",
        color: colorLibrary.RED,
        noteResolution: 1,
        processing: { gain: { gain: 0.7 } }
      },
      "2": {
        id: "2",
        label: "Track 2",
        muted: false,
        soloed: false,
        instrumentID: "1",
        color: colorLibrary.ORANGE,
        noteResolution: 2,
        processing: { gain: { gain: 0.7 } }
      },
      "3": {
        id: "3",
        label: "Track 3",
        muted: false,
        soloed: false,
        instrumentID: "1",
        color: colorLibrary.INDIGO,
        noteResolution: 4,
        processing: { gain: { gain: 0.7 } }
      },
      "4": {
        id: "4",
        label: "Track 4",
        muted: false,
        soloed: false,
        instrumentID: "1",
        color: colorLibrary.GREEN,
        noteResolution: 1,
        processing: { gain: { gain: 0.7 } }
      }
    },
    instruments: {
      "1": {
        id: "1",
        label: "Instrument 1",
        group: "group",
        sampleIDs: ["1"],
        mapping: {
          M67: {
            midi: 67,
            sampleID: "1",
            detune: -100
          },
          M68: {
            midi: 68,
            sampleID: "1",
            detune: 0
          },
          M69: {
            midi: 69,
            sampleID: "1",
            detune: 100
          }
        }
      }
    },
    matrix: {
      "1": matrix,
      "2": matrix,
      "3": matrix,
      "4": matrix
    },
    samples: {
      "1": {
        id: "1",
        filename: "sample",
        label: "Sample",
        url: "url",
        type: "type"
      }
    }
  },
  instruments: {
    "1": {
      id: "1",
      label: "Instrument 1",
      group: "group",
      sampleIDs: ["1"],
      mapping: {
        M69: {
          midi: 69,
          sampleID: "1",
          detune: 100
        }
      }
    }
  },
  samples: {
    "1": {
      id: "1",
      filename: "sample",
      label: "Sample",
      url: "url",
      type: "type"
    }
  }
}
