import React from 'react'
import Hero from '../Hero'
import About from './About'
import BMI from './BMI'
import Services from './Servicres'
import Banner from './Banner'
import Trainers from './Trainers'
import Popular from './Popular'
import Princingplan from './Princingplan'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
   <>
   <div className='w-full h-auto'>
    <Hero/>

    <About/>
    <BMI/>
    <Services/>
    <Banner/>
    <Trainers/>
    <Popular/>
    <Princingplan/>
    <Contact/>
    <Footer/>
   </div>
   </>
  )
}

export default Home
