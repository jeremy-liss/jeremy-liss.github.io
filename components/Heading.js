import React from 'react'

const Heading = (props) => {

let email = props.name+'@'+props.email+'.'+'com'

  return (
    <div className="container">
      <div className="row">
        <div className="heading">
          <h1>Jeremy Liss</h1>
          <p>
            Enspiral Dev Academy Graduate<br />
            Full-Stack Web Developer<br />
            <a href={"mailto:" + email}>{email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Heading
