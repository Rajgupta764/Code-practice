import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/credential/Login'
import Register from './components/credential/Register'
import Todo from './components/todo/Todo'
import Language from './components/lang/Language'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/language' element={<Language/>}/>
      </Routes>
    </>
  )
}

export default App
