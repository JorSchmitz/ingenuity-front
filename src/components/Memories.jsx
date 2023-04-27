import React from 'react'
import './styles/Memories.css'

const Memories = () => {
  return (
    <main id='memories' className='memories'>
      <div className='memories__title'>
        <img src='Grupo54.svg' />
        <h2>Memories</h2>
      </div>
      <div className='memories__gallery'>
        <img className='memories__gallery-img1' src="14322538_1245420755518990_4236770325307774581_n.png" alt="" />
        <img className='memories__gallery-img2' src="21685935_1615511418509920_6491417614339878702_n.png" alt="" />
        <img className='memories__gallery-img3' src="40808616_2018763951517996_2574844232665661440_n.png" alt="" />
        <img className='memories__gallery-img4' src="41099653_2018780958182962_8517396395416616960_n.png" alt="" />
        <img className='memories__gallery-img5' src="40903460_2018764138184644_8462339609081151488_n.png" alt="" />
        <img className='memories__gallery-img6' src="ot9bKhYEOxhuVEsa6si4svj2bDonTlaOsOaIAeOF.png" alt="" />
      </div>
      <button className='memories__btn'>MORE MEMORIES</button>
    </main>
  )
}

export default Memories