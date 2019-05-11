// @flow strict
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "../reducers"
import loggerMiddleware from "../middlewares/logger"
import { NOT_IN_PROD } from "../../utils/env"

const configureStore = () => {
  const middlewares = []

  if (NOT_IN_PROD) {
    middlewares.push(loggerMiddleware)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  if (NOT_IN_PROD && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
  }

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

export default configureStore
