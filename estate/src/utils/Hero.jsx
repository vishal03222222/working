import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-Container'>
        <div className='hero-left'>
          left side
        </div>
        <div className='flexCenter hero-right'>
          <div className='image-cointainer'>
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
