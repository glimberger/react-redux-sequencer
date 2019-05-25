// @flow strict
import * as React from "react"

type Props = {
  children: React.Node
}

const PrefsContext = React.createContext<{
  cellSize: number,
  gutter: number,
  panelWidth: number,
  panelHeight: number,
  transitionDuration: number
}>({})
const { Consumer, Provider } = PrefsContext

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

export { PrefsProvider, Consumer as PrefsConsumer, PrefsContext }
