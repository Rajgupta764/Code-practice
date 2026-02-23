import React, { useState } from 'react'
import './mytodo.css'

const Mytodo = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState(['']);

    const handle=()=>{
        setList([...list,input]);
        setInput('');
    }
    // save data to local storage
    localStorage.setItem('list',JSON.stringify(list));

  return (
    <div className='container'>
        <h1>This is my todo list here</h1>
        <div className="list">
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter your todo here'/>
            <button onClick={handle}>+Add</button>
        </div>
        <div className="show">
            <p>
                {list.map((list,index)=>{
                    return <div className="showlist">
                        <p key={index}>{list}</p>
                    </div>
                })}
            </p>
        </div>
    </div>
  )
}

export default Mytodo
