import React, { useState } from 'react'
import translations from './db'
import './language.css'

const Language = () => {

    const [lang,setLang]=useState('en')

    const changelang=(language)=>{
        setLang(language)
    }

  return (
    <div className="page">
      <div className="lang-card">
        <div className="lang-header">
          <h2>Language studio</h2>
          <span>Pick your language</span>
        </div>
        <div className="lang-text">
          <h1>{translations[lang].welcome}</h1>
          <h1>{translations[lang].watching}</h1>
          <h1>{translations[lang].tutorial}</h1>
        </div>

        <div className="lang-buttons">
          <button onClick={() => changelang('en')}>English</button>
          <button onClick={() => changelang('hi')}>Hindi</button>
          <button onClick={() => changelang('ar')}>Arabic</button>
          <button onClick={() => changelang('jp')}>Japanese</button>
        </div>
      </div>
    </div>
  )
}

export default Language
