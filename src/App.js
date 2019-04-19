// @flow strict
import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import Menu from "./components/Menu/Menu"
import SessionPage from "./components/pages/SessionPage/SessionPage"
import HomePage from "./components/pages/HomePage/HomePage"

library.add(faPlay, faPause)

class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/session" component={SessionPage} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
