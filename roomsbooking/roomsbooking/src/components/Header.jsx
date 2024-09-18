import React, { useEffect, useState } from 'react'
import Logowhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'

const Header = () => {
  const [header,setheader]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY> 50 ?setheader(true):setheader(false);
    })
  })

  return (
    <header 
    className={`${
   header ? 'bg-white py-6 shadow-lg': 'bg-transparent py-8' }fixed 
   z-50 w-full transition-all duration-300`}>
    <div className="container mx-auto">
      <a href='/'>
      {header ? (<img src={LogoDark} />):(<img src={Logowhite} />) }
            </a>
    </div>
      
    </header>
  )
}

export default Header
