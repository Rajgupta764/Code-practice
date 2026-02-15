import React, { useState } from 'react'
import translations from './Db.js'
import './style.css'

const App = () => {

  const [lang, setLang] = useState('en')

  const changeLanguage = (language) => {
    setLang(language)
  }

  return (
    <div className="container">

      <h1>{translations[lang].welcome}</h1>
      <p>{translations[lang].watching}</p>
      <p>{translations[lang].tutorial}</p>

      <div className="buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
        <button onClick={() => changeLanguage('ar')}>Arabic</button>
        <button onClick={() => changeLanguage('jp')}>Japanese</button>
      </div>

    </div>
  )
}

export default App
