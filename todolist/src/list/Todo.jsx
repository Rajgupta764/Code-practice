import React, { useState, useEffect } from 'react'
import './style.css'

const Todo = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState(()=>{
        try {
            const savedList=localStorage.getItem('list');
            return savedList && savedList !== 'undefined' ? JSON.parse(savedList) : [];
        } catch (error) {
            console.error('Error parsing localStorage:', error);
            localStorage.removeItem('list');
            return [];
        }
    });

    const handle=()=>{
        setList([...list,input]);
        setInput('');
    }

    // save data to local storage whenever list changes
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(list));
    }, [list]);

    const del=()=>{
        setList([])
    }

  return (
    <div className='container'>
      <h1>Write your toddo list</h1>
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter your todo here...' />
      <button onClick={handle}>+add</button>
      

      <ul>
         {list.map((list,index)=>{
           return  <p key={index}>{list}</p>
         })}
      </ul>
      <button className='del' onClick={del}>delete</button>
    </div>
  )
}

export default Todo
