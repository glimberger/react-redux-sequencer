import { createStore, applyMiddleware, Middleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "../reducers"
import loggerMiddleware from "../middlewares/logger"
import { NOT_IN_PROD } from "../../utils/env"
import { IAudioState } from "./audio/interfaces"
import { ISession } from "./session/interfaces"
import { IInstruments } from "./instrument/interfaces"
import { ISamples } from "./sample/interfaces"

export interface IAppState {
    audio: IAudioState
    session: ISession
    instruments: IInstruments
    samples: ISamples
}

const configureStore = (preloadState: IAppState) => {
    const middlewares: Middleware[] = []

    if (NOT_IN_PROD) {
        middlewares.push(loggerMiddleware)
    }

    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    if (NOT_IN_PROD && module.hot) {
        module.hot.accept("../reducers", () =>
            store.replaceReducer(rootReducer)
        )
    }

    const store = createStore(rootReducer, preloadState, composedEnhancers)

    return store
}

export default configureStore
