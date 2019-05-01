// @flow strict
import type { AudioState } from "./types"

const initialState: AudioState = {
  ready: false,
  playing: false,
  mode: "PLAY",
  currentBeat: 0,
  // currentTrackPanel: null,
  // currentCellPanel: null,
  // mutes: {
  //   "8ebdfbd8-4528-4e5e-932b-987c5405aec5": { enabled: false },
  //   "14f2dd71-77ad-4cf6-88f3-64680bf8f007": { enabled: false },
  //   "3eef107a-73c2-47d0-8c89-7cfe606dfcbd": { enabled: false },
  //   "7f6938d7-56e5-4d6c-90cd-431edad19a94": { enabled: false }
  // },
  // solos: {
  //   "8ebdfbd8-4528-4e5e-932b-987c5405aec5": { enabled: false },
  //   "14f2dd71-77ad-4cf6-88f3-64680bf8f007": { enabled: false },
  //   "3eef107a-73c2-47d0-8c89-7cfe606dfcbd": { enabled: false },
  //   "7f6938d7-56e5-4d6c-90cd-431edad19a94": { enabled: false }
  // },
  events: []
}

export default initialState
