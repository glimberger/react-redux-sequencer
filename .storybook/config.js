import { configure, addDecorator } from "@storybook/react"
import { withOptions } from "@storybook/addon-options"
import { withInfo } from "@storybook/addon-info"

import "../src/index.css"

addDecorator(withInfo)
addDecorator(
  withOptions({
    name: "Sequencer — Components",
    url: "https://glimberger.github.io/react-redux-sequencer/"
  })
)

const req = require.context("../src/components", true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
