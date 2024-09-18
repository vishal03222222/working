import React, { useContext } from 'react'
import { Roomcontext } from '../context/RoomContext'
import {Menu} from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

  const lis=[
    {name: '1 Adult'},
    {name: '2 Adults'},

    {name: '3 Adults'},
    {name: '4 Adults'},
    {name: '5 Adults'},

  ]
  const AdultsDropdown = () => {
    const {adults,setadults }=useContext(Roomcontext)
  return (
    < Menu as='div'  className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {adults}
        <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40' >
        {lis.map((li,index)=>{
          return <Menu.Item
          onClick={()=>setadults(li.name)} as='li' className='border-b last-of-type:border-b-0 h-12
          over:bg-accent over:text-white w-full flex justify-center
          items-center cursor-pointer' key={index}>{li.name}</Menu.Item>
        })}

      </Menu.Items>
        
        
    </Menu>
  )
}

export default AdultsDropdown
