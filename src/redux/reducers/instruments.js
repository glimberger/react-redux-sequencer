// @flow strict
import type { Instrument, Instruments } from "../store/instrument/types"

const instrumentsReducer = (state: Instruments = {}, action: *) => {
  switch (action.type) {
    default:
      return state
  }
}

export default instrumentsReducer

export function getInstrumentListIndexedByGroup(
  state: Instruments
): { [group: string]: { [instrumentID: string]: Instrument } } {
  let list = {}

  Object.keys(state).forEach(instrumentID => {
    const instr = state[instrumentID]
    const group = instr.group

    list = {
      ...list,
      [group]: {
        ...list[group],
        [instrumentID]: instr
      }
    }
  })

  return list
}

export function getSampleIDs(
  state: Instruments,
  instrumentID: string
): Array<string> {
  return state[instrumentID].sampleIDs
}
