// @flow strict
import * as React from "react"

import MasterPanel from "../../MasterPanel/MasterPanel"
import SequencerConnected from "../../Sequencer/SequencerConnected"
import AudioEngineConnected from "../../AudioEngine/AudioEngineConnected"

import pageStyles from "../Page.module.css"

function SessionPage() {
  return (
    <div className={pageStyles.Container}>
      <MasterPanel />
      <section style={{ margin: "1rem" }}>
        <SequencerConnected />
        <AudioEngineConnected />
      </section>
    </div>
  )
}

export default SessionPage
