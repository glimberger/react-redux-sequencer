import { Dispatch, MiddlewareAPI } from "redux"
import { AnyAction } from "../reducers"
import { IAppState } from "../store/configureStore"

// tslint:disable:no-console
const logger = (store: MiddlewareAPI<Dispatch<AnyAction>, IAppState>) => (
  next: Dispatch<AnyAction>
) => {
  return (action: AnyAction) => {
    if (!console.group) {
      next(action)
    }

    console.groupCollapsed(action.type)
    console.debug("%c prev state", "color: grey", store.getState())
    console.debug("%c action", "color: blue", action)
    const result = next(action)
    console.debug("%c next state", "color: green", store.getState())
    console.groupEnd()

    return result
  }
}

export default logger
