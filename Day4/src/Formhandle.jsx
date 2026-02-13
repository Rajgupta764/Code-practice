import React from 'react'

const Formhandle = () => {

  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("Form submit kr du kya..")
  }

  return (
    <div>
      <h1>simple form handling </h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enteer your name..'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Formhandle
