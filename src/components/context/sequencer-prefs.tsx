
import * as React from "react"

interface IProps  {
  children: React.ReactNode
}

interface IPrefs {
  cellSize: number,
  gutter: number,
  panelWidth: number,
  panelHeight: number,
  transitionDuration: number
}

const SequencerPrefs = React.createContext<IPrefs>({
  cellSize: 0,
  gutter: 0,
  panelWidth: 0,
  panelHeight: 0,
  transitionDuration: 0
})

const prefs = {
  cellSize: 36,
  gutter: 6,
  panelWidth: 280,
  panelHeight: 300,
  transitionDuration: 300
}

function PrefsProvider({ children }: IProps) {
  return (<SequencerPrefs.Provider value={prefs}>{children}</SequencerPrefs.Provider>)
}

function usePrefs(): IPrefs {
  const preferences = React.useContext(SequencerPrefs)
  if (!preferences) {
    throw new Error("usePrefs must be used within a PrefsProvider")
  }

  return prefs
}

export { PrefsProvider, SequencerPrefs, usePrefs }
