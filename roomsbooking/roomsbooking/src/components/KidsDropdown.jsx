
import React, { useContext } from 'react'
import { Roomcontext } from '../context/RoomContext'
import {Menu} from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

  const lis=[
    {name: '0 kids'},
    {name: '1 kids'},
    {name: '2 kids'},

    {name: '3 kids'},
    {name: '4 kids'},
   

  ]
  const KidsDropdown = () => {
    const {kids,setkids}=useContext(Roomcontext)
  return (
    < Menu as='div'  className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
      {kids === '0 kids' ? 'No kids':kids}
        <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40' >
        {lis.map((li,index)=>{
          return <Menu.Item   onClick={()=> setkids(li.name)} as='li' className='border-b last-of-type:border-b-0 h-12
          over:bg-accent over:text-white w-full flex justify-center
          items-center cursor-pointer' key={index}>{li.name}</Menu.Item>
        })}

      </Menu.Items>
        
        
    </Menu>
  )
}

export default KidsDropdown
