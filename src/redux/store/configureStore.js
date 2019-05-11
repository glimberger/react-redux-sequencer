// @flow strict
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "../reducers"
import loggerMiddleware from "../middlewares/logger"
import { NOT_IN_PROD } from "../../utils/env"
import type { AudioState } from "./audio/types"
import type { Session } from "./session/types"
import type { Instruments } from "./instrument/types"
import type { Samples } from "./sample/types"

export type AppState = {|
  audio: AudioState,
  session: Session,
  instruments: Instruments,
  samples: Samples
|}

const configureStore = () => {
  const middlewares = []

  if (NOT_IN_PROD) {
    middlewares.push(loggerMiddleware)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  // $FlowFixMe
  const composedEnhancers = composeWithDevTools(...enhancers)

  // $FlowFixMe
  if (NOT_IN_PROD && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
  }

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

export default configureStore
