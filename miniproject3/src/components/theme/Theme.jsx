import React, { useEffect, useState } from 'react'
import './theme.css'

const Theme = ({ compact = false }) => {
    const [dark, setDark] = useState(false);
    const handle = () => {
      setDark((prev) => !prev);
    }

    useEffect(() => {
      document.body.classList.remove('theme-dark', 'theme-light');
      document.body.classList.add(dark ? 'theme-dark' : 'theme-light');

      return () => {
        document.body.classList.remove('theme-dark', 'theme-light');
      };
    }, [dark]);

  if (compact) {
    return (
      <div className="theme-toggle theme-toggle--compact">
        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={handle}
            aria-label="Toggle theme"
          />
          <span className="slider" />
        </label>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="theme-card">
        <h2>Theme switch</h2>
        <p>Flip the switch to change the vibe.</p>
        <div className="theme-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={dark}
              onChange={handle}
              aria-label="Toggle theme"
            />
            <span className="slider" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Theme
