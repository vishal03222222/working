import React from 'react'
import "./hero.css"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-Container'>
        <div className='hero-left'>

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
