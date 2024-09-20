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
import CheckOut from '../components/CheckOut';
import CheckIn from '../components/CheckIn';
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
const RoomDetails = () => {
  const { rooms } = useContext(Roomcontext);
  const { id } = useParams();


  const room = rooms.find((room) => {
    return room.id === Number(id)
  });

  const { name, description, facilaties, imageLg, price } = room
  return (
    <section >
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
          <div className='w-full -full lg:w-[40%] px-6  '>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt="" />
            <div className='mt-21'>
              <h3 className='h3 mb-3' Room Facilities></h3>

              <p className='mb-12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque

                ...error.corrupti, ratione nemo dolor, magni blanditiis dicta
                aliquid
                totam libero odit dolorem, natus provident ipsam fugiat
                autem.Eum,

                laudantium consectetur

              </p>

              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilaties.map((item, index) => {
                  const { name, icon } = item;
                  return <div className='flex-items-center gap-x-3 flex-1' key={index}>
                    <div className='text-3xl text-accent' >{icon}</div>
                    <div className='text-base' >{name}</div>
                  </div>
                })}
              </div>
            </div>

          </div>


          <div className='w-full -full lg:w-[40%] bg-blue-300'>
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your reservation</h3>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <div className='h-[60px]'>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px]'>
                  <KidsDropdown />
                </div>

              </div>
              <button className='btn btn-lg btn-primary w-full'>Book now for${price}</button>
            </div>
            <div>
              <h3 className='h3'>otel Rules</h3>
              <p className='mb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque

                ...error.corrupti, ratione nemo dolor, magni blanditiis dicta
                aliquid
              </p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  check-in 3:00 PM - 9.00PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  check-out 3:00 PM - 9.00PM
                </li><li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No pets
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  No smoking
                </li>

              </ul>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}

export default RoomDetails
