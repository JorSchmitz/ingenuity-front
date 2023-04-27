import React from 'react'
import './styles/Banner.css'

const Banner = () => {
  return (
    <main id='home' className='banner'>
      <video className='banner__video-phone' src='Final.mp4' autoPlay muted loop playsInline>Your browser does not support videos</video>
      <video className='banner__video-desktop' src='Final2.mp4' autoPlay muted loop playsInline>Your browser does not support videos</video>
      <div className='banner__scroll'>
        <img src="Grupo 971.svg" alt="" />
        <hr />
      </div>
      <div className='banner__btns'>
        <button className='banner__btn-comment'><img src="comment_FILL0_wght400_GRAD0_opsz48.svg" alt="" /></button>
        <button className='banner__btn-fav'>
          <img src="favorite_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
          <p>JOIN US</p>
        </button>
      </div>
    </main>
  )
}

export default Banner