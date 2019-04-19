import React from "react"
import { storiesOf } from "@storybook/react"

import Matrix from "./Matrix"

const session = {
  tempo: 120,
  masterGain: 1,
  trackOrder: [
    "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
    "14f2dd71-77ad-4cf6-88f3-64680bf8f007",
    "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
    "7f6938d7-56e5-4d6c-90cd-431edad19a94"
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
      { scheduled: false, midi: 69 }
    ]
  },
  tracks: {
    "8ebdfbd8-4528-4e5e-932b-987c5405aec5": {
      id: "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
      label: "TrackTitle 1",
      noteResolution: 1,
      instrumentID: "a5caf57b-0771-4c56-a600-28a422f0c45d",
      color: "red",
      processing: {
        gain: { gain: 1 }
      }
    },
    "14f2dd71-77ad-4cf6-88f3-64680bf8f007": {
      id: "14f2dd71-77ad-4cf6-88f3-64680bf8f007",
      label: "TrackTitle 2",
      noteResolution: 2,
      instrumentID: "8ba96671-f8b4-45fc-8aa9-6f229154c5db",
      color: "pink",
      processing: {
        gain: { gain: 1 }
      }
    },
    "3eef107a-73c2-47d0-8c89-7cfe606dfcbd": {
      id: "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
      label: "TrackTitle 3",
      noteResolution: 4,
      instrumentID: "eb8ee72b-726d-4238-944f-b220d989a903",
      color: "purple",
      processing: {
        gain: { gain: 1 }
      }
    },
    "7f6938d7-56e5-4d6c-90cd-431edad19a94": {
      id: "7f6938d7-56e5-4d6c-90cd-431edad19a94",
      label: "TrackTitle 4",
      noteResolution: 1,
      instrumentID: "3e8329f8-945d-4dde-9307-f14d3542973a",
      color: "deepPurple",
      processing: {
        gain: { gain: 1 }
      }
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
    }
  }
}

const mutes = {
  "a5caf57b-0771-4c56-a600-28a422f0c45d": { enabled: false },
  "8ba96671-f8b4-45fc-8aa9-6f229154c5db": { enabled: true },
  "eb8ee72b-726d-4238-944f-b220d989a903": { enabled: false },
  "3e8329f8-945d-4dde-9307-f14d3542973a": { enabled: false }
}

const solos = {
  "a5caf57b-0771-4c56-a600-28a422f0c45d": { enabled: false },
  "8ba96671-f8b4-45fc-8aa9-6f229154c5db": { enabled: false },
  "eb8ee72b-726d-4238-944f-b220d989a903": { enabled: true },
  "3e8329f8-945d-4dde-9307-f14d3542973a": { enabled: false }
}

storiesOf("Matrix", module)
  .addDecorator(story => (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1f26"
      }}
    >
      {story()}
    </div>
  ))
  .add("PLAY mode - beat 4", () => (
    <Matrix
      sessionState={session}
      audioState={{
        ready: true,
        playing: false,
        mode: "PLAY",
        currentBeat: 4,
        currentTrackPanel: null,
        currentCellPanel: null,
        mutes,
        solos,
        events: []
      }}
    />
  ))
  .add("PLAY mode - beat 5", () => (
    <Matrix
      sessionState={session}
      audioState={{
        ready: true,
        playing: false,
        mode: "PLAY",
        currentBeat: 5,
        currentTrackPanel: null,
        currentCellPanel: null,
        mutes,
        solos,
        events: []
      }}
    />
  ))
  .add("PLAY mode - beat 6", () => (
    <Matrix
      sessionState={session}
      audioState={{
        ready: true,
        playing: false,
        mode: "PLAY",
        currentBeat: 6,
        currentTrackPanel: null,
        currentCellPanel: null,
        mutes,
        solos,
        events: []
      }}
    />
  ))
  .add("PLAY mode - beat 7", () => (
    <Matrix
      sessionState={session}
      audioState={{
        ready: true,
        playing: false,
        mode: "PLAY",
        currentBeat: 7,
        currentTrackPanel: null,
        currentCellPanel: null,
        mutes,
        solos,
        events: []
      }}
    />
  ))
  .add("EDIT mode", () => (
    <Matrix
      sessionState={session}
      audioState={{
        ready: true,
        playing: false,
        mode: "EDIT",
        currentBeat: 4,
        currentTrackPanel: "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
        currentCellPanel: {
          beat: 7,
          trackID: "3eef107a-73c2-47d0-8c89-7cfe606dfcbd"
        },
        mutes,
        solos,
        events: []
      }}
    />
  ))
