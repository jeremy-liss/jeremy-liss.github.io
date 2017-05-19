import React from 'react'

const Links = (props) => {
  return (
    <div className="container">
      <div className="links">
        {props.links.map((three, i)=>{
          return (
            <div className="row" key={i}>
              {three.map((link, i)=>{
                return (
                  <div className="four columns value" key={i}>
                    <h5><a href={link.address}>{link.name}</a></h5>
                    <p><a href={link.code}>(code)</a></p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Links
