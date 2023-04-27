import React from 'react'
import './styles/Contact.css'

const Contact = () => {
  return (
    <main id='contact' className='contact__container'>
      <section className='contact'>
        <div className='contact__img-container'>
          <img src="online-communication.png" alt="" />
        </div>
        <div className='contact__info'>
          <div className='contact__info-title'>
            <h2 className='contact__info-title-blue'>Join</h2>
            <h2 className='contact__info-title-orange'> us.</h2>
          </div>
          <p>In the sea of life, there is nothing to fear if you have God as your captain. Join our crew!</p>
        </div>
        <form className='contact__form'>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email Address' />
          <input type="tel" placeholder='Cell Phone Number' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button className='contact__form-btn'>JOIN US</button>
        </form>
      </section>
    </main>
  )
}

export default Contact