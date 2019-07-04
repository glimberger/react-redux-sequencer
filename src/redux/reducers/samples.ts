import { ISamples } from "../store/sample/interfaces"

const SamplesReducer = (state: ISamples = {}, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default SamplesReducer

export function getSamplesByIDs(state: ISamples, IDs: string[]) {
    const samples: ISamples = {}

    IDs.forEach(ID => {
        samples[ID] = state[ID]
    })

    return samples
}
