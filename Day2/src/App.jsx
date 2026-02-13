import React from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import Footer from './Footer'
import Counter from './Counter'
import Controlinput from './Controlinput'
import Todolist from './Todolist'
import List from './List'

const App = () => {
  return (
    <div>
      {/* <Navbar Name="Raj kumar" age={30} isStudent={true}/>
      <Navbar Name="Raj kumar" age={30} isStudent={true}/>
      <Navbar Name="Raj kumar" age={30} isStudent={true}/>
      <Navbar Name="Raj kumar" age={30} isStudent={true}/>
      <Navbar Name="Raj kumar" age={30} isStudent={true}/> */}
      {/* <ProductCard/>
      <Footer/> */}
      <Counter/>
      <Controlinput/>
      <Todolist/>
      <List/>
    </div>
  )
}

export default App
