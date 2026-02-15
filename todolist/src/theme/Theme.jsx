import React, { useState } from 'react'
import './style.css'

const Theme = () => {

    const [dark,setDark]=useState(false)
    const handle=()=>{
        setDark(!dark)
    }

  return (
    <div className={dark?'dark':'light'}>
        <h1>this is my simple toggle mini project </h1>


        <button onClick={handle}>{dark?"🩵":"🚨"}</button>
    </div>
  )
}

export default Theme
