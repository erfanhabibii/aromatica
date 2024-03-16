import ReactDOM from "react-dom";
import React from 'react'

export default function Overlay() {
  return ReactDOM.createPortal(
    <div className='fixed z-40 w-full h-screen bg-black/60 flex items-center justify-center transition-all duration-300'>{" "}</div>,
    document.getElementById("overlay")
  )
}
