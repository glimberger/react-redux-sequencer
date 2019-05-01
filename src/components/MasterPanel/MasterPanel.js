// @flow strict
import * as React from "react"

import MasterGainControllerConnected from "./MasterGainController/MasterGainControllerConnected"
import TempoControllerConnected from "./TempoController/TempoControllerConnected"
import TransportConnected from "./Transport/TransportConnected"
import styles from "./MasterPanel.module.css"

function MasterPanel() {
  return (
    <div>
      <div className={styles.Base}>
        <div className={styles.Transport}>
          <TransportConnected color={"blueGrey"} />
        </div>
        <div className={styles.MasterGain}>
          <MasterGainControllerConnected color={"blueGrey"} />
        </div>
        <div className={styles.Tempo}>
          <TempoControllerConnected />
        </div>
      </div>
    </div>
  )
}

export default MasterPanel
