// @flow strict
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import configureStore from "../../redux/store/configureStore"
import App from "../App/App"
import audio from "../../redux/store/audio/initialState"
import session from "../../redux/store/session/initialState"
import { instruments } from "../../redux/store/instrument/initialState"
import { samples } from "../../redux/store/sample/initialState"

const preloadState = {
  audio: audio,
  session: session,
  instruments: instruments,
  samples: samples
}
const store = configureStore(preloadState)

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
