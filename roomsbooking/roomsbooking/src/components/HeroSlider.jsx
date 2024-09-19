import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {EffectFade , Autoplay} from 'swiper';
import img1 from '../assets/img/heroslider/1.jpg'
import img2 from '../assets/img/heroslider/2.jpg'
import img3 from '../assets/img/heroslider/3.jpg'
 
const slides=[
  {
    title:'your Luxury Hotel For Vacation',
    bg:img1,
    btnText: 'Room & Suites'
  },
  {
    title:'your Luxury Hotel For Vacation',
    bg:img2,
    btnText: 'Room & Suites'
  },
  {
    title:'your Luxury Hotel For Vacation',
    bg:img3,
    btnText: 'Room & Suites'
  }
]


const HeroSlider = () => {
  return (
    <Swiper className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide,index)=>{
        const {title,bg,btnText}=slide
        return(
          <SwiperSlide className='h-full bg-pink-400 relative justify-center items-center' key={index}>
            <div>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'> Just Enjoy and Relax</div>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img  className='object-cover h-full w-full'src={slide.bg} alt="" />
            </div>
            <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider
