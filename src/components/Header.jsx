import React, { useRef } from 'react'
import './styles/Header.css'
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";

const Header = () => {

  const navRef = useRef()

  const showNav = () => {
    navRef.current.classList.toggle('responsive__nav')
  }

  return (
    <main className='header'>
      <a href="#home"><img className='header__logo' src="logo.svg" alt="" /></a>
      <nav className='header__nav' ref={navRef}>
        <a href="#home">HOME</a>
        <a href="#events">EVENTS</a>
        <a href="#crew">THE CREW</a>
        <a href="#memories">MEMORIES</a>
        <a href="#contact">CONTACT</a>
        <button className='close__btn' onClick={showNav}>
          <RiCloseLine />
        </button>
      </nav>
      <button className='open__btn' onClick={showNav}>
        <RiMenu5Fill />
      </button>
    </main>
  )
}

export default Header