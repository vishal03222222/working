import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';


const Hero = () => {
    const swiperData = [
        {
          id: 1,
          bgImg: "https://source.unsplash.com/random/?fitness",
          slogan: "Keep your body",
          title: "Burning",
          desc: "Get ready to burn off some serious fat with our high quality products.",
        },
        {
          id: 2,
          bgImg: "https://source.unsplash.com/random/?gym",
          slogan: "Just Believe In",
          title: "Yourself",
          desc: "We are here to help you achieve your goals.",
        },
        {
          id: 3,
          bgImg: "https://source.unsplash.com/random/?yoga",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our high quality products.",
        },
      ];
  return (
    <>
    <div className='w-full h-auto'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper w-full h-auto"
      >
        <SwiperSlide className='w-full h-[70vh] relative' style={{backgroundImage:"url('./images/hero-1.jpg)",backgroundSize:"cover",
            backgroundPosition:"center",backgroundRepeat:
        }}>Slide 1</SwiperSlide>
       
      </Swiper>
    </div>
    </>
  )
}

export default Hero
