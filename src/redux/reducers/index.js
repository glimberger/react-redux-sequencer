//@flow strict
import { combineReducers } from "redux"

import audioReducer from "./audio"
import sessionReducer from "./session"

const rootReducer = combineReducers({
  audio: audioReducer,
  session: sessionReducer
})

export default rootReducer
