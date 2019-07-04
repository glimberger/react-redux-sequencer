import * as React from "react"
import { connect } from "react-redux"
import { v4 as uuid } from "uuid"

import AddTrackButton from "./AddTrackButton"
import AddTrackModal from "./AddTrackModal"
import { addTrack } from "../../../redux/actions/session/creators"
import { getInstrumentListIndexedByGroup } from "../../../redux/reducers/instruments"

import { MaterialColor } from "../../../utils/color/colorLibrary"
import {
  IInstrument,
  IInstruments
} from "../../../redux/store/instrument/interfaces"
import { ISamples } from "../../../redux/store/sample/interfaces"
import { IAppState } from "../../../redux/store/configureStore"

interface IOwnProps {
  color: MaterialColor
}

interface IProps extends IOwnProps {
  instruments: IInstruments
  samples: ISamples
  addTrack: (
    trackID: string,
    instrument: IInstrument,
    samples: ISamples
  ) => void
}

export function AddTrack(props: IProps) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const handleNewTrack = (instrument: IInstrument) => {
    setModalOpen(false)

    const instrumentSamples: ISamples = {}
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

const mapStateToProps = (state: IAppState) => ({
  instruments: state.instruments,
  samples: state.samples
})

const AddTrackConnected = connect(
  mapStateToProps,
  { addTrack }
)(AddTrack)

export default AddTrackConnected
