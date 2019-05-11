// @flow strict
import type { Samples } from "../store/sample/types"
import { samples as initialState } from "../store/sample/initialState"

const SamplesReducer = (state: Samples = initialState, action: *) => {
  switch (action.type) {
    default:
      return state
  }
}

export default SamplesReducer

export function getSamplesByIDs(state: Samples, IDs: Array<string>): Samples {
  const samples = {}

  IDs.forEach(ID => {
    samples[ID] = state[ID]
  })

  return samples
}
