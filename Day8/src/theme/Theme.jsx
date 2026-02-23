import React, { useEffect, useState } from 'react'
import './Theme.css'

const Theme = () => {

    const [dark,setDark]=useState(false);

    useEffect(()=>{
        if(dark){
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
        else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    },[dark])

  return (
    <div className='container'>
        <h1>Theme changes</h1>
        <button onClick={()=>{setDark(!dark)}}>{dark?"change to light":"change to dark"}</button>
    </div>
  )
}

export default Theme
