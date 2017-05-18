import React from 'react'
import Heading from './Heading'
import Links from './Links'

const App = (props) => {
  return (
      <div className="homepage">
        <Heading name={props.name} email={props.email} />
        <Links links={props.links} />
      </div>
    )
}

export default App
