import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import rootReducer from "../src/redux/reducers"

export const reduxDecorator = (state = undefined) => {
  const initialSate = {
    tempo: 120,
    masterGain: 1,
    trackOrder: [
      "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
      "14f2dd71-77ad-4cf6-88f3-64680bf8f007",
      "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
      "7f6938d7-56e5-4d6c-90cd-431edad19a94",
      "2786bd06-ba1b-49d2-822f-2cef416f2a2f"
    ],
    matrix: {
      "8ebdfbd8-4528-4e5e-932b-987c5405aec5": [
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 }
      ],
      "14f2dd71-77ad-4cf6-88f3-64680bf8f007": [
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 }
      ],
      "3eef107a-73c2-47d0-8c89-7cfe606dfcbd": [
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: true, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: true, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: true, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: true, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: true, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: true, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: true, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: true, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: true, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: true, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: true, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: true, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: true, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: true, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: true, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: true, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: true, midi: 69 }
      ],
      "7f6938d7-56e5-4d6c-90cd-431edad19a94": [
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: true, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: true, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: true, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: true, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: true, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: true, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: true, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: true, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: true, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: true, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: true, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 }
      ],
      "2786bd06-ba1b-49d2-822f-2cef416f2a2f": [
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 },
        // beat 0
        { scheduled: false, midi: 69 },
        // beat 1
        { scheduled: false, midi: 69 },
        // beat 2
        { scheduled: false, midi: 69 },
        // beat 3
        { scheduled: false, midi: 69 },
        // beat 4
        { scheduled: false, midi: 69 },
        // beat 5
        { scheduled: false, midi: 69 },
        // beat 6
        { scheduled: false, midi: 69 },
        // beat 7
        { scheduled: false, midi: 69 },
        // beat 8
        { scheduled: false, midi: 69 },
        // beat 9
        { scheduled: false, midi: 69 },
        // beat 10
        { scheduled: false, midi: 69 },
        // beat 11
        { scheduled: false, midi: 69 },
        // beat 12
        { scheduled: false, midi: 69 },
        // beat 13
        { scheduled: false, midi: 69 },
        // beat 14
        { scheduled: false, midi: 69 },
        // beat 15
        { scheduled: false, midi: 69 }
      ]
    },
    activeTrackID: "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
    activeCellBeat: 6,
    tracks: {
      "8ebdfbd8-4528-4e5e-932b-987c5405aec5": {
        id: "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
        label: "Bass Drum",
        noteResolution: 1,
        instrumentID: "a5caf57b-0771-4c56-a600-28a422f0c45d",
        color: "red",
        processing: {
          gain: { gain: 0.089 }
        },
        muted: false,
        soloed: false
      },
      "14f2dd71-77ad-4cf6-88f3-64680bf8f007": {
        id: "14f2dd71-77ad-4cf6-88f3-64680bf8f007",
        label: "Snare Drum",
        noteResolution: 1,
        instrumentID: "8ba96671-f8b4-45fc-8aa9-6f229154c5db",
        color: "pink",
        processing: {
          gain: { gain: 1 }
        },
        muted: false,
        soloed: false
      },
      "3eef107a-73c2-47d0-8c89-7cfe606dfcbd": {
        id: "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
        label: "Hi-Hat",
        noteResolution: 1,
        instrumentID: "eb8ee72b-726d-4238-944f-b220d989a903",
        color: "purple",
        processing: {
          gain: { gain: 1 }
        },
        muted: false,
        soloed: false
      },
      "7f6938d7-56e5-4d6c-90cd-431edad19a94": {
        id: "7f6938d7-56e5-4d6c-90cd-431edad19a94",
        label: "Maracas",
        noteResolution: 1,
        instrumentID: "3e8329f8-945d-4dde-9307-f14d3542973a",
        color: "deepPurple",
        processing: {
          gain: { gain: 1 }
        },
        muted: false,
        soloed: false
      },
      "2786bd06-ba1b-49d2-822f-2cef416f2a2f": {
        id: "2786bd06-ba1b-49d2-822f-2cef416f2a2f",
        label: "Clap",
        noteResolution: 2,
        instrumentID: "77d2c144-2a6c-483a-b94c-8584dcdc2b7c",
        color: "indigo",
        processing: {
          gain: { gain: 1 }
        },
        muted: false,
        soloed: false
      }
    },
    instruments: {
      "a5caf57b-0771-4c56-a600-28a422f0c45d": {
        id: "a5caf57b-0771-4c56-a600-28a422f0c45d",
        label: "TR808-BD",
        mapping: [
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 },
          { sampleID: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b", detune: 0 }
        ]
      },
      "8ba96671-f8b4-45fc-8aa9-6f229154c5db": {
        id: "8ba96671-f8b4-45fc-8aa9-6f229154c5db",
        label: "TR808-SD",
        mapping: [
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
          { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 }
        ]
      },
      "eb8ee72b-726d-4238-944f-b220d989a903": {
        id: "eb8ee72b-726d-4238-944f-b220d989a903",
        label: "TR808-OH",
        mapping: [
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 },
          { sampleID: "9dce9279-194e-4d6f-9f07-d7968eb13f63", detune: 0 }
        ]
      },
      "3e8329f8-945d-4dde-9307-f14d3542973a": {
        id: "3e8329f8-945d-4dde-9307-f14d3542973a",
        label: "TR808-MA",
        mapping: [
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 },
          { sampleID: "19b606f5-52b5-49f5-a3b6-566c245e0407", detune: 0 }
        ]
      },
      "77d2c144-2a6c-483a-b94c-8584dcdc2b7c": {
        id: "77d2c144-2a6c-483a-b94c-8584dcdc2b7c",
        label: "TR808-CP",
        mapping: [
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 },
          { sampleID: "8cf86f2f-0b50-42bb-81d8-22731d462161", detune: 0 }
        ]
      }
    },
    samples: {
      "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b": {
        id: "7ff6ffa7-9768-4bfc-b6c8-b99a70be556b",
        filename: "BD2525.WAV",
        url: "/sounds/7ff6ffa7-9768-4bfc-b6c8-b99a70be556b",
        label: "TR808 - BD2525",
        type: "audio/vnd.wave"
      },
      "7f9a144d-64b5-43e0-a3ca-3878085ce582": {
        id: "7f9a144d-64b5-43e0-a3ca-3878085ce582",
        filename: "SD0010.WAV",
        url: "/sounds/7f9a144d-64b5-43e0-a3ca-3878085ce582",
        label: "TR808 - SD0010",
        type: "audio/vnd.wave"
      },
      "9dce9279-194e-4d6f-9f07-d7968eb13f63": {
        id: "9dce9279-194e-4d6f-9f07-d7968eb13f63",
        filename: "OH00.WAV",
        url: "/sounds/9dce9279-194e-4d6f-9f07-d7968eb13f63",
        label: "TR808 - OH00",
        type: "audio/vnd.wave"
      },
      "19b606f5-52b5-49f5-a3b6-566c245e0407": {
        id: "19b606f5-52b5-49f5-a3b6-566c245e0407",
        filename: "MA.WAV",
        url: "/sounds/19b606f5-52b5-49f5-a3b6-566c245e0407",
        label: "TR808 - MA",
        type: "audio/vnd.wave"
      },
      "8cf86f2f-0b50-42bb-81d8-22731d462161": {
        id: "8cf86f2f-0b50-42bb-81d8-22731d462161",
        filename: "CP.WAV",
        url: "/sounds/8cf86f2f-0b50-42bb-81d8-22731d462161",
        label: "TR808 - CP",
        type: "audio/vnd.wave"
      }
    }
  }

  const store = createStore(rootReducer, { session: initialSate })

  return story => <Provider store={store}>{story()}</Provider>
}
