import React, { useState } from 'react'
import Handle from './Handle'
import Formhandle from './Formhandle'
import Logout from './Logout';
import Login from './Login';

const App = () => {

  const [isLogedin,setisLogedin]=useState(false);

  return (
    <div>
      <h1>Handling the conditional rendering</h1>
      {isLogedin?<Logout/> :<Login/>}
    </div>
  )
}

export default App
