import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let state = [false, false, false, false, false]

let count = 0

const links = (num) => {
  state[num] = true
  count ++
  render(state)
}

setInterval(()=>{
  links(count)
}, 700)

const target = document.getElementById('root')

const render = ()=> {
  ReactDOM.render(App(state), target)
}

render()
