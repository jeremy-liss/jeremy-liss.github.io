import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'
import App from './components/App'

const target = document.getElementById('root')

const render = ()=> {
  ReactDOM.render(App(state), target)
}

render()
