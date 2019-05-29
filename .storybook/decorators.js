import React from "react"
import { Provider } from "react-redux"

import { PrefsProvider } from "../src/components/context/sequencer-prefs"
import configureStore from "../src/redux/store/configureStore"
import type { AppState } from "../src/redux/store/configureStore"

export const withContainer = story => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: "1rem",
      backgroundColor: "#1e1f26"
    }}
  >
    {story()}
  </div>
)

export const withPrefsProvider = story => <PrefsProvider>{story()}</PrefsProvider>

export const withReduxProvider = (state: AppState) => {
  const store = configureStore(state)
  return story => <Provider store={store}>{story()}</Provider>
}
