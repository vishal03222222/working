import React from 'react'
import { useContext } from 'react';
import useParams from 'react-router-dom'
import Adultsdropdown from '../components/AdultsDropdown';
import kidsdropdown from '../components/KidsDropdown';
import checkin from '../components/CheckIn';
import checkout from '../components/CheckOut';

import Scrolltotop from '../components/ScrollToTop';
import { Roomcontext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
const RoomDetails = () => {
   const {rooms} =useContext(Roomcontext);
    const {id} = useParams();
  

    const room =rooms.find((room)=>{
      return room.id ===Number(id)
    });

    const {name , description,facilaties,imageLg,price}=room
  return (
    <section className='bg-pink-200'>
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex
      justify-center items-ceneter'>
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py2'>

        </div>
      </div>
    </section>
  )
}

export default RoomDetails
