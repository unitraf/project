import React from 'react'
import './loader.css'

// const loaader = document.querySelector('.loader')
// window.addEventListener('load', e=>{
// loaader.className +=" hidden"
// })

const Loader = () => {
  return (
    <div className='anim' >
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  )
}

export default Loader