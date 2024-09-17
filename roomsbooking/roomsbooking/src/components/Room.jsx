import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowsFullscreen,Bspeople} from 'react-icons/bs'

const Room = ({room}) => {
  const{id,name,image,size,maxperson,description,price}=room;

  return (
    <div className='bg-white sadow-2xl min-h-[500px] group'>
      <div>
        <img 
        className='group-hover:scale-110 transition-all duration-300 w-full' 
        src={image} alt="" />
      </div>
      
    </div>
  )
}

export default Room
