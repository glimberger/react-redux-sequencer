// @flow strict
import type { Session } from "./types"

const initialSate: Session = {
  tempo: 120,
  masterGain: 1,
  trackOrder: [
    "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
    "14f2dd71-77ad-4cf6-88f3-64680bf8f007",
    "3eef107a-73c2-47d0-8c89-7cfe606dfcbd",
    "7f6938d7-56e5-4d6c-90cd-431edad19a94",
    "2786bd06-ba1b-49d2-822f-2cef416f2a2f",
    "d8d1a41f-171c-4694-9280-9d77b1b91ca2"
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
    ],
    "d8d1a41f-171c-4694-9280-9d77b1b91ca2": [
      // beat 0
      { scheduled: true, midi: 40 },
      // beat 1
      { scheduled: false, midi: 69 },
      // beat 2
      { scheduled: false, midi: 69 },
      // beat 3
      { scheduled: false, midi: 69 },
      // beat 4
      { scheduled: true, midi: 40 },
      // beat 5
      { scheduled: false, midi: 69 },
      // beat 6
      { scheduled: false, midi: 69 },
      // beat 7
      { scheduled: false, midi: 69 },
      // beat 8
      { scheduled: true, midi: 40 },
      // beat 9
      { scheduled: false, midi: 69 },
      // beat 10
      { scheduled: false, midi: 69 },
      // beat 11
      { scheduled: false, midi: 69 },
      // beat 12
      { scheduled: true, midi: 40 },
      // beat 13
      { scheduled: false, midi: 69 },
      // beat 14
      { scheduled: false, midi: 69 },
      // beat 15
      { scheduled: false, midi: 69 },
      // beat 0
      { scheduled: true, midi: 33 },
      // beat 1
      { scheduled: false, midi: 69 },
      // beat 2
      { scheduled: false, midi: 69 },
      // beat 3
      { scheduled: false, midi: 69 },
      // beat 4
      { scheduled: true, midi: 33 },
      // beat 5
      { scheduled: false, midi: 69 },
      // beat 6
      { scheduled: false, midi: 69 },
      // beat 7
      { scheduled: false, midi: 69 },
      // beat 8
      { scheduled: true, midi: 33 },
      // beat 9
      { scheduled: false, midi: 69 },
      // beat 10
      { scheduled: false, midi: 69 },
      // beat 11
      { scheduled: false, midi: 69 },
      // beat 12
      { scheduled: true, midi: 33 },
      // beat 13
      { scheduled: false, midi: 69 },
      // beat 14
      { scheduled: false, midi: 69 },
      // beat 15
      { scheduled: false, midi: 69 },
      // beat 0
      { scheduled: true, midi: 38 },
      // beat 1
      { scheduled: false, midi: 69 },
      // beat 2
      { scheduled: false, midi: 69 },
      // beat 3
      { scheduled: false, midi: 69 },
      // beat 4
      { scheduled: true, midi: 38 },
      // beat 5
      { scheduled: false, midi: 69 },
      // beat 6
      { scheduled: false, midi: 69 },
      // beat 7
      { scheduled: false, midi: 69 },
      // beat 8
      { scheduled: true, midi: 38 },
      // beat 9
      { scheduled: false, midi: 69 },
      // beat 10
      { scheduled: false, midi: 69 },
      // beat 11
      { scheduled: false, midi: 69 },
      // beat 12
      { scheduled: true, midi: 38 },
      // beat 13
      { scheduled: false, midi: 69 },
      // beat 14
      { scheduled: false, midi: 69 },
      // beat 15
      { scheduled: false, midi: 69 },
      // beat 0
      { scheduled: true, midi: 35 },
      // beat 1
      { scheduled: false, midi: 69 },
      // beat 2
      { scheduled: false, midi: 69 },
      // beat 3
      { scheduled: false, midi: 69 },
      // beat 4
      { scheduled: true, midi: 35 },
      // beat 5
      { scheduled: false, midi: 69 },
      // beat 6
      { scheduled: false, midi: 69 },
      // beat 7
      { scheduled: false, midi: 69 },
      // beat 8
      { scheduled: true, midi: 35 },
      // beat 9
      { scheduled: false, midi: 69 },
      // beat 10
      { scheduled: false, midi: 69 },
      // beat 11
      { scheduled: false, midi: 69 },
      // beat 12
      { scheduled: true, midi: 35 },
      // beat 13
      { scheduled: false, midi: 69 },
      // beat 14
      { scheduled: false, midi: 69 },
      // beat 15
      { scheduled: false, midi: 69 }
      ]
  },
  activeTrackID: null,
  activeCellBeat: null,
  tracks: {
    "8ebdfbd8-4528-4e5e-932b-987c5405aec5": {
      id: "8ebdfbd8-4528-4e5e-932b-987c5405aec5",
      label: "Bass Drum",
      noteResolution: 1,
      instrumentID: "a5caf57b-0771-4c56-a600-28a422f0c45d",
      color: "red",
      processing: {
        gain: { gain: 1 }
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
    },
    "d8d1a41f-171c-4694-9280-9d77b1b91ca2": {
      id: "d8d1a41f-171c-4694-9280-9d77b1b91ca2",
      label: "Bass",
      noteResolution: 2,
      instrumentID: "a025e47b-3e71-4c03-b3b8-de203b3b6f12",
      color: "purple",
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
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: -100 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: -75 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: -50 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: -25 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 0 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 25 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 50 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 75 },
        { sampleID: "7f9a144d-64b5-43e0-a3ca-3878085ce582", detune: 100 },
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
    },
    "a025e47b-3e71-4c03-b3b8-de203b3b6f12": {
      id: "a025e47b-3e71-4c03-b3b8-de203b3b6f12",
      label: "BASS-STACCATO",
      mapping: [
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -28 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -27 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -26 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -25 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -24 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -23 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -22 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -21 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -20 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -19 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -18 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -17 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -16 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -15 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -14 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -13 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -12 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -11 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -10 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -9 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -8 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -7 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -6 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -5 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -4 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -3 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -2 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: -1 },
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: 0 }, // E1
        { sampleID: "acc4ea8c-cd40-44f2-b553-0642f411a144", detune: 1 },
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: 2 },
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: -2 },
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: -1 }, // A1
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: 1 },
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: 2 },
        { sampleID: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7", detune: 3 },
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: -3 },
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: -2 },
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: -1 },
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: 0 }, //E2
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: 1 },
        { sampleID: "901cfa41-c230-4c26-903b-22f99ee13deb", detune: 2 },
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: -2 },
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: -1 },
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: 0 }, //A2
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: 1 },
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: 2 },
        { sampleID: "6eeff2d5-6c90-43c2-91f6-3a68f0911483", detune: 3 },
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: -3 },
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: -2 },
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: -1 },
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: 0 }, //E3
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: 1 },
        { sampleID: "53a20b19-712e-4a43-b718-98b7ff897880", detune: 2 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: -2 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: -1 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 }, //A3
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 1 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 2 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 3 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 4 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 5 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 6 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 7 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
        { sampleID: "fc897b72-744c-434b-9018-6e860da11edb", detune: 0 },
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
    },
    "acc4ea8c-cd40-44f2-b553-0642f411a144": {
      id: "acc4ea8c-cd40-44f2-b553-0642f411a144",
      filename: "BASS_STAC_E0.WAV",
      url: "/sounds/acc4ea8c-cd40-44f2-b553-0642f411a144",
      label: "BASS_STAC_E0",
      type: "audio/vnd.wave"
    },
    "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7": {
      id: "1e95d1b8-440a-41f3-ab0a-3a48587bf6f7",
      filename: "BASS_STAC_A0.WAV",
      url: "/sounds/1e95d1b8-440a-41f3-ab0a-3a48587bf6f7",
      label: "BASS_STAC_A0",
      type: "audio/vnd.wave"
    },
    "901cfa41-c230-4c26-903b-22f99ee13deb": {
      id: "901cfa41-c230-4c26-903b-22f99ee13deb",
      filename: "BASS_STAC_E1.WAV",
      url: "/sounds/901cfa41-c230-4c26-903b-22f99ee13deb",
      label: "BASS_STAC_E1",
      type: "audio/vnd.wave"
    },
    "6eeff2d5-6c90-43c2-91f6-3a68f0911483": {
      id: "6eeff2d5-6c90-43c2-91f6-3a68f0911483",
      filename: "BASS_STAC_A1.WAV",
      url: "/sounds/6eeff2d5-6c90-43c2-91f6-3a68f0911483",
      label: "BASS_STAC_A1",
      type: "audio/vnd.wave"
    },
    "53a20b19-712e-4a43-b718-98b7ff897880": {
      id: "53a20b19-712e-4a43-b718-98b7ff897880",
      filename: "BASS_STAC_E2.WAV",
      url: "/sounds/53a20b19-712e-4a43-b718-98b7ff897880",
      label: "BASS_STAC_E2",
      type: "audio/vnd.wave"
    },
    "fc897b72-744c-434b-9018-6e860da11edb": {
      id: "fc897b72-744c-434b-9018-6e860da11edb",
      filename: "BASS_STAC_A2.WAV",
      url: "/sounds/fc897b72-744c-434b-9018-6e860da11edb",
      label: "BASS_STAC_A2",
      type: "audio/vnd.wave"
    }
  }
};

export default initialSate
