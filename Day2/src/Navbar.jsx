import React from 'react'

const Navbar = (props) => {
  return (
    <div className='student'>
      <h1>Name:{props.Name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Student:{props.isStudent ? "Yes" : "No"}</h1>
    </div>
  )
}

export default Navbar
