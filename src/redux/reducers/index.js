//@flow strict
import { combineReducers } from "redux"

import audioReducer from "./audio"
import sessionReducer from "./session"

import type { Action as AudioAction } from "../actions/audio/types"
import type { Action as SessionAction } from "../actions/session/types"

type Action = AudioAction | SessionAction

const rootReducer = combineReducers<{}, Action>({
  audio: audioReducer,
  session: sessionReducer
})

export default rootReducer
