import React, { useEffect, useRef, useState } from 'react'

export default function EidCard({ open, onToggle, setMusicOn, onShare }) {
  const [typed, setTyped] = useState('')
  const message = "May Allah accept your sacrifices, bless your family with peace, happiness, and endless mercy. Eid ul Adha Mubarak!"
  const idxRef = useRef(0)
  const typingRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    // typing animation
    setTyped('')
    idxRef.current = 0
    if (typingRef.current) {
      clearInterval(typingRef.current)
      typingRef.current = null
    }

    typingRef.current = setInterval(() => {
      const nextChar = message.charAt(idxRef.current)
      if (nextChar === '') {
        clearInterval(typingRef.current)
        typingRef.current = null
        return
      }
      setTyped(prev => prev + nextChar)
      idxRef.current++
    }, 28)

    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current)
      }
    }
  }, [open])

  useEffect(() => {
    const el = cardRef.current
    const handleMove = e => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 12
      const y = (e.clientY / innerHeight - 0.5) * 8
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${ -y/4 }deg) rotateY(${ x/4 }deg)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])



  return (
    <div className={`card-wrap ${open ? 'open' : ''}`}>
      <div className="card" ref={cardRef} onClick={onToggle}>
        <div className="card-ornament" />
        <div className="card-border-anim" />
          <div className="calligraphy">
            <div className="arabic">عيد مبارك</div>
            <div className="subtitle">الاحتفال بالإيمان والامتنان والتآلف</div>
          </div>

        <p className="blessing">{typed}<span className="cursor" /></p>

        <div className="card-actions">
          <button className="btn" onClick={e=>{e.stopPropagation(); onShare && onShare()}}>Share Blessings</button>
        </div>

        <div className="signature-card" onClick={e=>e.stopPropagation()}>
          <div className="sig-deco">☪</div>
          <div className="sig-text">
            <div className="sig-from">From</div>
            <div className="sig-name">RIFAH ARIF</div>
          </div>
        </div>
      </div>
    </div>
  )
}
