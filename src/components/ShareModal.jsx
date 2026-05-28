import React from 'react'

export default function ShareModal({open, onClose}){
  if(!open) return null

  const shareText = `Eid ul Adha Mubarak — May Allah accept your sacrifices and bless your family. View this digital greeting.`

  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText(shareText)
      alert('Blessing copied to clipboard')
    }catch(err){
      alert('Copy failed')
    }
  }

  const handleNative = async () => {
    if(navigator.share){
      try{ await navigator.share({title:'Eid ul Adha — Blessings', text:shareText, url:window.location.href}) }catch(e){}
    }else{
      alert('Native share not supported on this device.')
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()} role="dialog" aria-modal>
        <h3>Share Blessings</h3>
        <p>Send this heartfelt blessing to family and friends.</p>
        <div className="modal-actions">
          <button className="btn primary" onClick={handleCopy}>Copy Message</button>
          <button className="btn" onClick={handleNative}>Share...</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
