import React, { useEffect, useRef } from 'react'

export default function MusicToggle({ musicOn, setMusicOn }){
  const audioRef = useRef(null)

  useEffect(()=>{
    if(!audioRef.current) return
    if(musicOn) audioRef.current.play().catch(()=>{})
    else audioRef.current.pause()
  }, [musicOn])

  return (
    <div className="music-toggle">
      <button onClick={()=>setMusicOn(v=>!v)} aria-label="Toggle music" className="icon-btn">
        {musicOn ? '🔊' : '🔈'}
      </button>
      <audio ref={audioRef} loop src="https://cdn.jsdelivr.net/gh/anars/blank-audio/250ms.mp3" />
    </div>
  )
}
