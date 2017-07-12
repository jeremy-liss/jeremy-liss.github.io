import React from 'react'

const App = (props) => {
  return (
    <div>
      <div className="heading">
        <h1>JEREMY LISS</h1>
        <p>Enspiral Dev Academy Graduate, Web Developer &tc.</p>
        {props[0] && <h4><a href="#">Space Invaders</a></h4>}
        {props[1] && <h4><a href='https://jeremy-liss.github.io/drum-machine/public/'> A Drum Sequencer</a></h4>}
        {props[2] && <h4><a href='https://jeremy-liss.github.io/barbara-shop/public/'>Barbara Shop Quartet</a></h4>}
        {props[3] && <h4><a href='https://hazardous-asteroids.herokuapp.com/'>Are There Any Hazerdous Asteroids<br/> Approaching Earth Today?</a></h4>}
        {props[4] && <h4><a href='https://jeremy-liss.github.io/a-z/'>An A-Z Of Things In My Kitchen</a></h4>}
        <p><a href='https://github.com/jeremy-liss/'>github</a> | email</p>
      </div>
    </div>
    )
}

export default App
