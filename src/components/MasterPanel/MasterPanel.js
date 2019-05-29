// @flow strict
import * as React from "react"

import MasterGainControllerConnected from "./MasterGainController/MasterGainControllerConnected"
import styles from "./MasterPanel.module.css"
import TempoController from "./TempoController/TempoController"
import Color from "../../utils/color/colorLibrary"
import Transport from "./Transport/Transport"

function MasterPanel() {
  return (
    <div>
      <div className={styles.Base}>
        <div className={styles.Transport}>
          <Transport color={"blueGrey"} />
        </div>
        <div className={styles.MasterGain}>
          <MasterGainControllerConnected color={Color.BLUE_GREY} />
        </div>
        <div className={styles.Tempo}>
          <TempoController color={Color.BLUE_GREY} />
        </div>
      </div>
    </div>
  )
}

export default MasterPanel
