// import React,{createContext,useEffect,useState} from 'react'
// import { roomData } from '../data'
// export const RoomContext=createContext();


// const Roomprovider = ({children}) => {
//   console.log(roomData)
//   return <RoomContext.Provider value={'room context'}>
//     {children}

//   </RoomContext.Provider>

// }

// export default RoomContext
import React, { createContext, useEffect, useState } from 'react';
import { roomData } from '../data';
export const Roomcontext = createContext();


const Roomprovider = ({ children }) => {
  console.log(roomData);
  const [rooms, setrooms] = useState(roomData);
  const [adults, setadults] = useState('1 Adult');
  const [kids, setkids] = useState('0 kids');
  const [total, settotal] = useState(0);
  const [loading,setloading]=useState(false)
  useEffect(() => {
    settotal(Number(adults[0]) + Number(kids[0]))
  });
  const handleclick = (e) => {
    e.preventDefault();
    console.log(total)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson
    })
    setTimeout(() => {
      setrooms(newRooms);
      setloading(false);
      
    },3000 );
   
  }
  console.log(rooms)

  return (
    <Roomcontext.Provider value={{ rooms, adults, setadults, kids, setkids, handleclick,loading }}>
      {children}
    </Roomcontext.Provider>
  )

}

export default Roomprovider;
