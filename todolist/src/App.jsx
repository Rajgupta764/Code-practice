import React from 'react'
import Todo from './list/todo'
import Password from './password/Password'
import Theme from './theme/Theme'

const App = () => {
  return (
    <div>
      <Theme/>
      <Todo/>
      <Password/>
    </div>
  )
}

export default App
