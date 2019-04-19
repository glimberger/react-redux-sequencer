// @flow strict
import * as React from "react"

import MasterGainControllerConnected from "./MasterGainController/MasterGainControllerConnected"
import TempoControllerConnected from "./TempoController/TempoControllerConnected"
import TransportConnected from "./Transport/TransportConnected"
import ModeIndicatorConnected from "./ModeSwitch/ModeSwitchConnected"
import styles from "./MasterPanel.module.css"

import type { MaterialColor } from "../../utils/color/colorLibrary"

const color: MaterialColor = "grey"

function MasterPanel() {
  return (
    <div>
      <div className={styles.Base}>
        <div className={styles.Transport}>
          <TransportConnected />
        </div>
        <div className={styles.MasterGain}>
          <MasterGainControllerConnected />
        </div>
        <div className={styles.Tempo}>
          <TempoControllerConnected />
        </div>
        <div className={styles.Mode}>
          <ModeIndicatorConnected color={color} />
        </div>
      </div>
    </div>
  )
}

export default MasterPanel
