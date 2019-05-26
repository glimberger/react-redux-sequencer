// @flow strict
import * as React from "react"

type Props = {
  children: React.Node
}

type PrefsType = {
  cellSize: number,
  gutter: number,
  panelWidth: number,
  panelHeight: number,
  transitionDuration: number
}

const SequencerPrefs = React.createContext<PrefsType>({})
const { Provider } = SequencerPrefs

const prefs = {
  cellSize: 36,
  gutter: 6,
  panelWidth: 280,
  panelHeight: 300,
  transitionDuration: 300
}

function PrefsProvider({ children }: Props) {
  return <Provider value={prefs}>{children}</Provider>
}

function usePrefs(): PrefsType {
  const prefs = React.useContext(SequencerPrefs)
  if (!prefs) {
    throw new Error("usePrefs must be used within a PrefsProvider")
  }

  return prefs
}

export { PrefsProvider, SequencerPrefs, usePrefs }
