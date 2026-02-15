import React, { useState } from 'react'
import Task3 from './Task3'
import Task4 from './Task4'
import Logout from './credential/Logout';
import Login from './credential/Login';

const App = () => {

  const [loged,setLoged]=useState(false);
  const handleloged=()=>{
    setLoged(!loged)
  }

  return (
    <div>
      <Task3/>
      <Task4/>
       <h1>simple conditional rendering</h1>
       <button onClick={handleloged}>{loged?<Login/>:<Logout/>}</button>
    </div>
  )
}

export default App
