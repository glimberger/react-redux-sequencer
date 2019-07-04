import { IInstrument, IInstruments } from "../store/instrument/interfaces"

const instrumentsReducer = (state: IInstruments = {}, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default instrumentsReducer

export function getInstrumentListIndexedByGroup(state: IInstruments) {
  let list: { [group: string]: { [instrumentID: string]: IInstrument } } = {}

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
  state: IInstruments,
  instrumentID: string
): string[] {
  return state[instrumentID].sampleIDs
}
