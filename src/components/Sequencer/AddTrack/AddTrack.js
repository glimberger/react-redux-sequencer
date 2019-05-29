// @flow strict
import * as React from "react"
import { connect } from "react-redux"
import uuid from "uuid/v4"

import AddTrackButton from "./AddTrackButton"
import AddTrackModal from "./AddTrackModal"
import { addTrack } from "../../../redux/actions/session/creators"
import { getInstrumentListIndexedByGroup } from "../../../redux/reducers/instruments"

import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type {
  Instrument,
  Instruments
} from "../../../redux/store/instrument/types"
import type { Samples } from "../../../redux/store/sample/types"
import type { AppState } from "../../../redux/store/configureStore"

type OwnProps = {|
  color: MaterialColor
|}

type Props = {
  ...OwnProps,
  instruments: Instruments,
  samples: Samples,
  addTrack: (trackID: string, instrument: Instrument, samples: Samples) => void
}

export function AddTrack(props: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const handleNewTrack = (instrument: Instrument) => {
    setModalOpen(false)

    const instrumentSamples: Samples = {}
    instrument.sampleIDs.forEach(
      sampleID => (instrumentSamples[sampleID] = props.samples[sampleID])
    )

    props.addTrack(uuid(), instrument, instrumentSamples)
  }

  return (
    <div>
      <AddTrackButton color={props.color} onClick={() => setModalOpen(true)} />

      <AddTrackModal
        color={props.color}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAfterOpen={afterOpenModal}
        onInstrumentSelect={handleNewTrack}
        instrumentList={getInstrumentListIndexedByGroup(props.instruments)}
      />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  instruments: state.instruments,
  samples: state.samples
})

const AddTrackConnected = connect<Props, OwnProps, _, _, _, _>(
  mapStateToProps,
  { addTrack }
)(AddTrack)

export default AddTrackConnected
