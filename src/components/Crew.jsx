import React from 'react'
import './styles/Crew.css'

const Crew = () => {
  return (
    <main id='crew'>
      <section className='crew'>
        <div className='crew__info'>
          <div className='crew__title'>
            <h2 className='crew__title-blue'>The </h2><h2 className='crew__title-orange'>crew.</h2>
          </div>
          <p>The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus. <br /> <br /> Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College’s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College.</p>
          <button className='crew__btn'>LEARN MORE</button>
        </div>
        <div className='crew__container'>
          <div className='crew__container-content'>
            <img src="sentiment_satisfied_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <p className='crew__number'>165</p>
            <p className='crew__text'>Happy freshman members</p>
          </div>
          <hr />
          <div className='crew__container-content'>
            <img src="group_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <p className='crew__number'>13</p>
            <p className='crew__text'>Wise Senior members</p>
          </div>
          <hr />
          <div className='crew__container-content'>
            <img src="groups_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
            <p className='crew__number'>173</p>
            <p className='crew__text'>The whole crew</p>
          </div>
        </div>
        <div className='crew__img-container'>
          <img className='crew__img1' src="14322538_1245420755518990_4236770325307774581_n.png" alt="" />
          <img className='crew__img2' src="21685935_1615511418509920_6491417614339878702_n.png" alt="" />
        </div>
      </section>

    </main>
  )
}

export default Crew