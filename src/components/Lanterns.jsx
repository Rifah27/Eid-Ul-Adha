import React from 'react'

export default function Lanterns(){
  return (
    <div className="lanterns" aria-hidden>
      {Array.from({length:6}).map((_,i)=> (
        <div key={i} className={`lantern l${i+1}`} />
      ))}
    </div>
  )
}
