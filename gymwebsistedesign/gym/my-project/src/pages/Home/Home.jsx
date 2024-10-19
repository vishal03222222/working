import React from 'react'
import Hero from '../Hero'
import About from './About'
import BMI from './BMI'

const Home = () => {
  return (
   <>
   <div className='w-full h-auto'>
    <Hero/>

    <About/>
    <BMI/>
   </div>
   </>
  )
}

export default Home
