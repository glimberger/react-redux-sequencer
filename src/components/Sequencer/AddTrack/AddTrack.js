// @flow strict
import * as React from "react"
import { connect } from "react-redux"
import uuid from "uuid/v4"

import AddTrackButton from "./AddTrackButton"
import AddTrackModal from "./AddTrackModal"
import {
  getInstrumentListIndexedByGroup,
  getSamplesByIDs
} from "../../../redux/reducers"
import { addTrack } from "../../../redux/actions/session/creators"

import type { MaterialColor } from "../../../utils/color/colorLibrary"
import type { Instrument } from "../../../redux/store/instrument/types"
import type { Samples } from "../../../redux/store/sample/types"

type Props = {
  // ownProps
  color: MaterialColor,
  width: number,
  height: number,
  gutter: number,
  // stateProps
  instrumentList: { [group: string]: { [instrumentID: string]: Instrument } },
  getSamplesByIDs: (sampleIDs: Array<string>) => Samples,
  // dispatchProps
  addTrack: (trackID: string, instrument: Instrument, samples: Samples) => void
}

type State = {
  modalIsOpen: boolean,
  loading: boolean
}

class AddTrack extends React.Component<Props, State> {
  state = {
    modalIsOpen: false,
    loading: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleNewTrack = (instrument: Instrument) => {
    this.closeModal()

    const samples = this.props.getSamplesByIDs(instrument.sampleIDs)

    this.props.addTrack(uuid(), instrument, samples)
  }

  render() {
    return (
      <div>
        <AddTrackButton
          color={this.props.color}
          height={this.props.height}
          width={this.props.width}
          gutter={this.props.gutter}
          onClick={this.openModal}
        />

        <AddTrackModal
          color={this.props.color}
          gutter={this.props.gutter}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onClose={this.closeModal}
          onInstrumentSelect={this.handleNewTrack}
          instrumentList={this.props.instrumentList}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  instrumentList: getInstrumentListIndexedByGroup(state),
  getSamplesByIDs: (sampleIDs: Array<string>) =>
    getSamplesByIDs(state, sampleIDs)
})

const AddTrackConnected = connect(
  mapStateToProps,
  { addTrack }
)(AddTrack)

export default AddTrackConnected
