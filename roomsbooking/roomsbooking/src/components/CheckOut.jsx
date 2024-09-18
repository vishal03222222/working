import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [Enddate,setEnddate]=useState(false

  )
  return (

    <div className='relative flex items-center justify-end h-full'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker className='w-full h-full'
      selected={Enddate}
      placeholderText='check out'
      onChange={(date=>setEnddate(date))}/>
  
    </div>
  )
}



 export default CheckOut
