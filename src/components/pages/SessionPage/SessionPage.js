// @flow strict
import * as React from "react"

import MasterPanel from "../../MasterPanel/MasterPanel"
import Sequencer from "../../Sequencer/Sequencer"
import { PrefsProvider } from "../../context/sequencer-prefs"
import pageStyles from "../Page.module.css"
import AudioEngine from "../../AudioEngine/AudioEngine"

function SessionPage() {
  return (
    <div className={pageStyles.Container}>
      <MasterPanel />
      <section style={{ margin: "1rem" }}>
        <PrefsProvider>
          <Sequencer />
          <AudioEngine />
        </PrefsProvider>
      </section>
    </div>
  )
}

export default SessionPage
