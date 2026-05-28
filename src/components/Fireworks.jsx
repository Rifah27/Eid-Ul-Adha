import React, { useEffect, useRef } from 'react'

export default function Fireworks(){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const w = canvas.width = window.innerWidth
    const h = canvas.height = window.innerHeight
    let particles = []

    function rand(min, max){ return Math.random()*(max-min)+min }

    function spawn(){
      const x = rand(w*0.2, w*0.8)
      const y = rand(h*0.1, h*0.5)
      const hue = Math.floor(rand(0, 360))
      for(let i=0;i<80;i++) particles.push({x,y,a:1,vx:Math.cos(i)*(rand(1,6)),vy:Math.sin(i)*(rand(1,6)),hue})
    }

    function update(){
      ctx.clearRect(0,0,w,h)
      particles.forEach((p,i)=>{
        p.x += p.vx
        p.y += p.vy + 0.04
        p.vx *= 0.99
        p.vy *= 0.99
        p.a *= 0.995
        ctx.fillStyle = `hsla(${p.hue},100%,60%,${p.a})`
        ctx.beginPath(); ctx.arc(p.x,p.y,2.2,0,Math.PI*2); ctx.fill()
        if(p.a<0.02) particles.splice(i,1)
      })
    }

    let raf
    let tick = 0
    function loop(){
      tick++
      if(tick%40===0) spawn()
      update()
      raf = requestAnimationFrame(loop)
    }
    loop()
    const tid = setTimeout(()=>{ cancelAnimationFrame(raf); }, 4200)
    return ()=>{ cancelAnimationFrame(raf); clearTimeout(tid) }
  }, [])

  return <canvas ref={ref} className="fireworks" />
}
