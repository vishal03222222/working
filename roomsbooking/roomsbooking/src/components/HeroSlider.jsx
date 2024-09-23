import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import img1 from '../assets/img/heroslider/1.jpg'
import img2 from '../assets/img/heroslider/2.jpg'
import img3 from '../assets/img/heroslider/3.jpg'

const slides = [
  {
    title: 'your Luxury Hotel For Vacation',
    bg: img1,
    btnText: 'See Our Rooms'
  },
  {
    title: 'your Luxury Hotel For Vacation',
    bg: img2,
    btnText: 'See Our Rooms'
  },
  {
    title: 'your Luxury Hotel For Vacation',
    bg: img3,
    btnText: 'See Our Rooms'
  }
]


const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,

      }} className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide
        return (
          <SwiperSlide className='h-full  relative flex justify-center items-center' key={index}>
            <div>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'> Just Enjoy and Relax</div>
              <h1 className='text-[]32px font-primary uppercase tracking-[2px] 
              max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
              <button className='btn btn-lg btn-primary mx-auto'></button>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={slide.bg} alt="" />
            </div>
            <div className='absolute inset-0 bg-black/40'></div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider
