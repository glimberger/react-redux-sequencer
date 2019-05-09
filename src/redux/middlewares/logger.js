// @flow strict
const logger = store => next => action => {
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
