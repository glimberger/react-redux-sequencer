// @flow strict
const logger = store => next => action => {
  if (!console.group) {
    next(action)
  }

  console.group(action.type)
  console.log("%c prev state", "color: grey", store.getState())
  console.log("%c action", "color: blue", action)
  let result = next(action)
  console.log("%c next state", "color: green", store.getState())
  console.groupEnd()
  return result
}

export default logger
