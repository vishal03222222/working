import React from 'react'
import Logowhite from '../assets/img/logo-white.svg'


const Footer = () => {
  return (
   <footer className='bg-primary py-12' >

     <div className='container mx-auto text-white flex justify-between'>
      <a href="/">
      <img src={Logowhite} alt="" />
      </a>
      copyright &cpy; 2024. All rights reserved.
    </div>
   </footer>
  )
}

export default Footer
