import React from 'react'

export default function ThemeToggle({ theme, setTheme }){
  return (
    <div className="theme-toggle">
      <button className="icon-btn" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} aria-label="Toggle theme">{theme==='dark'?'🌙':'🌤️'}</button>
    </div>
  )
}
