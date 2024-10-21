import React from 'react'
import Hero from '../Hero'
import About from './About'
import BMI from './BMI'
import Services from './Servicres'

const Home = () => {
  return (
   <>
   <div className='w-full h-auto'>
    <Hero/>

    <About/>
    <BMI/>
    <Services/>
   </div>
   </>
  )
}

export default Home
