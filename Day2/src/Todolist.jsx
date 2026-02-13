import React, { useState } from 'react'

const Todolist = () => {

    const [list,setList] =useState('');
    const [items,setItem]= useState([]);

    let additem=()=>{
        setItem([...items,list]); //purani list ke sath nayi list add karna
        setList('')
    }

  return (
    <div>
      <h1>Simple todo list</h1>
      <div className="simple">
        <input type="text" value={list} onChange={(event)=>{setList(event.target.value)}}  placeholder='Enter your todo here..'/>
        <button onClick={additem}>Add</button>

        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        
      </div>
    </div>
  )
}

export default Todolist
