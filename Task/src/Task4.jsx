import React from 'react'
import { translation } from './Db'

const Task4 = () => {

    const [language,setLanguage]=React.useState("en");

    const handleLanguageChange=(lang)=>{
        setLanguage(lang);
    }
  return (
    <div>
      
      <h1>{translation[language].welcome}</h1>
      <h1>{translation[language].watching}</h1>
      <h1>{translation[language].tutorial}</h1>

      <button onClick={()=>handleLanguageChange("en")}>English</button>
      <button onClick={()=>handleLanguageChange("hi")}>Hindi</button>
      <button onClick={()=>handleLanguageChange("ar")}>Arabic</button>
      <button onClick={()=>handleLanguageChange("jp")}>Japanese</button>
    </div>
  )
}

export default Task4
