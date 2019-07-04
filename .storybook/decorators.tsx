import React from "react"
import { Provider } from "react-redux"

import { PrefsProvider } from "../src/components/context/sequencer-prefs"
import configureStore, { IAppState } from "../src/redux/store/configureStore"

export const withContainer = (story: any) => (
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

export const withPrefsProvider = (story: any) => (
    <PrefsProvider>{story()}</PrefsProvider>
)

export const withReduxProvider = (state: IAppState) => {
    const store = configureStore(state)
    return (story: any) => <Provider store={store}>{story()}</Provider>
}
