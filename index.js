import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let state = [
  {
    link: 'https://jeremy-liss.github.io/space-invaders/public/',
    text: 'Space Invaders',
    visible: false
  },
  {
    link: 'https://jeremy-liss.github.io/drum-machine/public/',
    text: 'A Drum Sequencer',
    visible: false
  },
  {
    link: 'https://jeremy-liss.github.io/barbara-shop/public/',
    text: 'Barbara Shop Quartet',
    visible: false
  },
  {
    link: 'https://hazardous-asteroids.herokuapp.com/',
    text: 'Are There Any Hazardous Asteroids',
    text2: 'Approaching Earth Today?',
    visible: false
  },
  {
    link: 'https://jeremy-liss.github.io/a-z/',
    text: 'An A-Z Of Things In My Kitchen',
    visible: false
  }
]

let count = 0

const links = (num) => {
  state[num].visible = true
  count ++
  render(state)
}

setInterval(()=>{
  count < 5 && links(count)
}, 700)

const target = document.getElementById('root')

const render = ()=> {
  ReactDOM.render(App(state), target)
}

render()
