import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

const App = () => {

  const [isLogedin,setIsLogedin]=useState(false)

 const handleclick=()=>{
  setIsLogedin(!isLogedin)
 }

  return (
    <div>
      

      <button onClick={handleclick}>{isLogedin?<Logout/>:<Login/>}</button>
    </div>
  )
}

export default App
