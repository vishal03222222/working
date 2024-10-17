import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import PrimaryBtn from '../components/button/Primarybtn';


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
        <Hero/>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {swiperData.map((data) = (

            <SwiperSlide
              key={data.id}
              className='w-full h-[70vh] relative bg-indigo-600'
              style={{
                backgroundImage: `url($(data.bgImg))`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}>

              <div className='w-full h-full bg-black/80 absolute top-0 -z-10'></div>
              <div className='w-full h-full flex items-center justify-center  flex-col z-10
              lg:px-24 md:px-16 sm:px-6 px-4 '>
                <h5 className="lg:text-4xl md:text-3xl sm-text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                  {data.slogan}</h5>
                <h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold
                  text-white mb-4'>{data.title}</h1>
                <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-500 font-medium mb-6 text-center">
                  {/* Get ready to burn off some serious fat with our high quality products */}
                  {data.descripton}
                </p>
                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80
                  %] text-xl h-14 mt-5 font-semibold rounded-full">Get Started</PrimaryBtn>
              </div>

            </SwiperSlide>

          ))}


          {/* <SwiperSlide className='w-full h-[70vh] '
            style={{
              backgroundImage: "url('./images/hero-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>Slide 2

            <div className='w-full h-full bg-black/80 absoluter top-0 -z-10'></div>
            <div className='w-full h-full flex items-center justify-center justify-center flex-col z-10
             lg:px-24 md:px-16 sm:px-6 px-4 '>
              <h5 className=" color-white lg:text-4xl md:text-3xl sm-text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">keep your body</h5>
            </div>

          </SwiperSlide> */}



        </Swiper>
        <div className="w-full h-auto flex items-center lg:justify-between
        md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5
        gap-5 1g:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">

          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%]
          sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30
           rounded-md ease-out duration-700 cursor-pointer">


            <h5 className="text-4x1text-indigo-400 font-semibold mb-2 uppercase">1200+ </h5>
            <p className="text-lg text-gray-600 font-medium">Clients Members</p>

          </div>
        </div>



      
    </div >
    </>
  )
}

export default Hero
