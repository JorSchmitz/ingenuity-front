import React from 'react'
import './styles/Events.css'

const Events = () => {
  return (
    <main id='events' className='events'>
      <div className='events__title'>
        <img src='Grupo54.svg' />
        <h2>EVENTS</h2>
      </div>
      <div className='events__container'>
        <div className='events__content'>
          <img src="50973721_2230244250369964_4223824044664815616_n.jpg" alt="" />
          <div className='events__text'>
            <p className='events__text-title'>EVENT 1</p>
            <p className='events__text-day'>12</p>
            <p className='events__text-month'>JUN</p>
          </div>
        </div>
        <div className='events__content'>
          <img src="Captura de pantalla 2022-05-25 152505.jpg" alt="" />
          <div className='events__text'>
            <p className='events__text-title'>EVENT 2</p>
            <p className='events__text-day'>13</p>
            <p className='events__text-month'>DIC</p>
          </div>
        </div>
        <div className='events__content'>
          <img src="Captura de pantalla 2022-05-25 152451.jpg" alt="" />
          <div className='events__text'>
            <p className='events__text-title'>EVENT 3</p>
            <p className='events__text-day'>16</p>
            <p className='events__text-month'>DIC</p>
          </div>
        </div>
      </div>
      <div className='events__more'>
        <p>Let's have fun, join us in our events. Find out more here.</p>
        <button className='events__btn'>MORE EVENTS</button>
      </div>
    </main>
  )
}

export default Events