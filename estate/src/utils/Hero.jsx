import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-iocns/hi';
import Countup from "react-countup"
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-Container'>
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle'></div>
            <h1>Discover <br />Most Suitable <br />Property</h1> </div>
        </div>
        <div className='flexColStart hero-des'>
          <span className='secondaryText'>Find a variety of peroperties that suit  you very easily</span>
          <span className='secondaryText'>Forget all difficulties in findina a residence for you</span>
          <div className='flexCenter search-bar'>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className='button'>Search</button>
          </div>
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <Countup start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium products</span>
            </div>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <Countup start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers </span>
            </div>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <Countup end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </div>
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
