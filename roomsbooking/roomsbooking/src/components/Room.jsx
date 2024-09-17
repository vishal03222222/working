import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowsFullscreen } from 'react-icons/bs'
import { BsPeople } from 'react-icons/bs';


const Room = ({ room }) => {
  const { id, name, image, size, maxperson, description, price } = room;

  return (
    <div className='bg-white sadow-2xl min-h-[500px] group'>
      <div>
        <img
          className='group-hover:scale-110 transition-all duration-300 w-full'
          src={image} alt="" />
      </div>
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px]
      -translate-y-1/2 flex justify-centeer items-center uppercase
      font-tertiary tracking-[1px] font-semibold text-base'>
        <div className='flex-justify-between w-[80%]'>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[18px]' />

            </div>
            <div className='flex gap-x-1'>
              <div>max people</div>
              <div>{maxperson}</div>


            </div>
          </div>


        </div>

      </div>
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>
          {description.slice(0, 56)}</p>
      </div>
      <div>
        <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>
          Book now from ${price}

        </Link>

      </div>


    </div>
  )
}

export default Room
