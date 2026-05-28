import React from 'react'

export default function Stars(){
  return (
    <div className="stars" aria-hidden>
      {Array.from({length:30}).map((_,i)=> (
        <i key={i} style={{'--s': Math.random()*1.8 + 0.6, left: `${Math.random()*100}%`, top: `${Math.random()*70}%`}} />
      ))}
    </div>
  )
}
