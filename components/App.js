import React from 'react'

const App = (props) => {
  return (
    <div>
      <div className="heading">
        <h1>JEREMY LISS</h1>
        <p>Enspiral Dev Academy Graduate, Web Developer &tc.</p>
        {props.map((link)=>{
          return (
            <div>
              {link.visible && <h4><a href={link.link}>{link.text}<br/>{link.text2}</a></h4>}
            </div>
          )
        })}
        <p><a href='https://github.com/jeremy-liss/'>github</a> | <a href='mailto:jeremyliss@gmail.com'>email</a></p>
      </div>
    </div>
    )
}

export default App
