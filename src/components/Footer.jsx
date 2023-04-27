import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <main className='footer'>
      <section className='footer__blue'>
        <div className='footer__info'>
          <img src="logo.svg" alt="" />
          <p>Follow us on our social networks and don't miss our latest news and events.</p>
        </div>
        <div className='footer__subscribe'>
          <p>SUBSCRIBE TO OUR <br /> NEWSLETTER!</p>
          <form className='footer__form'>
            <input className='footer__input' type="email" placeholder='Your Email' />
            <button className='footer__btn'>SEND</button>
          </form>
        </div>
        <div className='footer__contact'>
          <div className='footer__contact-container'>
            <img src="Grupo 975.svg" alt="" />
            <p>+57 (322) 374 6739</p>
          </div>
          <div className='footer__contact-container'>
            <img src="Grupo 974.svg" alt="" />
            <p>servicio@lurdes.co</p>
          </div>
        </div>
      </section>
      <section className='footer__orange'>
        <p>Terms & Conditions | Privacy Policy <br /> © Copyright 2020 - 2021 Ingenuity & Solutions LLC All Rights Reserved.</p>
      </section>
    </main>
  )
}

export default Footer