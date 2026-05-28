import React from 'react'

export default function GeometricPattern(){
  return (
    <svg className="geom-pattern" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#0b4d3a" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#061229" stopOpacity="0.02" />
        </linearGradient>
        <pattern id="tiles" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1">
            <path d="M60 0 L120 30 L60 60 L0 30 Z" />
            <circle cx="60" cy="30" r="6" fill="rgba(212,175,55,0.03)" />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#g1)"/>
      <rect width="100%" height="100%" fill="url(#tiles)" className="tiles" />

      <g className="geom-orbit" transform="translate(600,120)">
        <circle r="80" stroke="rgba(212,175,55,0.06)" strokeWidth="1" fill="none" />
        <path d="M-40 -40 L40 -40 L40 40 L-40 40 Z" fill="rgba(212,175,55,0.03)" />
      </g>
    </svg>
  )
}
