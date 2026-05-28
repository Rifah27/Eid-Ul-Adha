import React, { useEffect, useState, useRef } from 'react'
import EidCard from './components/EidCard'
import Moon from './components/Moon'
import Lanterns from './components/Lanterns'
import Stars from './components/Stars'
import Fireworks from './components/Fireworks'
import MusicToggle from './components/MusicToggle'
import ThemeToggle from './components/ThemeToggle'
import GeometricPattern from './components/GeometricPattern'
import ShareModal from './components/ShareModal'

export default function App() {
  const [open, setOpen] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [showFireworks, setShowFireworks] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Enter') toggleCard()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleCard = () => {
    setOpen(v => !v)
    if (!open) {
      setShowFireworks(true)
      setTimeout(() => setShowFireworks(false), 4500)
    }
  }

  return (
    <div className="app" ref={wrapperRef}>
      <div className="bg-pattern" />
      <GeometricPattern />
      <Moon />
      <Stars />
      <Lanterns />
      <div className="controls">
        <MusicToggle musicOn={musicOn} setMusicOn={setMusicOn} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      <EidCard
        open={open}
        onToggle={toggleCard}
        setMusicOn={setMusicOn}
        onShare={()=>setShowShare(true)}
      />

      {showFireworks && <Fireworks />}
      <ShareModal open={showShare} onClose={()=>setShowShare(false)} />
    </div>
  )
}
