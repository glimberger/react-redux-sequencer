// @flow strict
import type { Dispatch } from "redux"
import type { AnyAction } from "../reducers"
import type { Store } from "redux"
import type { AppState } from "../store/configureStore"

const logger = (store: Store<AppState, AnyAction>) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  if (!console.group) {
    next(action)
  }

  console.group(action.type)
  console.debug("%c prev state", "color: grey", store.getState())
  console.debug("%c action", "color: blue", action)
  let result = next(action)
  console.debug("%c next state", "color: green", store.getState())
  console.groupEnd()
  return result
}

export default logger
