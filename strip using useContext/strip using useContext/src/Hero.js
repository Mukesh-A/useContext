import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>Hey there 👋 This is MUKESH</h1>
        <p>Welcome to the world of Fantacy</p>
        <button className='btn'>
          Start now
        </button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className="phone-img" alt="" />
      </article>
    </div>
  </section>
}

export default Hero
