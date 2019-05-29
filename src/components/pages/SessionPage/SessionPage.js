// @flow strict
import * as React from "react"

import MasterPanel from "../../MasterPanel/MasterPanel"
import Sequencer from "../../Sequencer/Sequencer"
import AudioEngineConnected from "../../AudioEngine/AudioEngineConnected"
import { PrefsProvider } from "../../context/sequencer-prefs"

import pageStyles from "../Page.module.css"

function SessionPage() {
  return (
    <div className={pageStyles.Container}>
      <MasterPanel />
      <section style={{ margin: "1rem" }}>
        <PrefsProvider>
          <Sequencer />
          <AudioEngineConnected />
        </PrefsProvider>
      </section>
    </div>
  )
}

export default SessionPage
