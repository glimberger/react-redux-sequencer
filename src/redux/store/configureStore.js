// @flow strict
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "../reducers"
import loggerMiddleware from "../middlewares/logger"

const configureStore = () => {
  const middlewares = []

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(loggerMiddleware)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
  }

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

export default configureStore
