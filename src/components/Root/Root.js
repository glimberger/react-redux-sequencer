// @flow strict
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import App from "../../App"
import configureStore from "../../redux/store/configureStore"

const store = configureStore()

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
