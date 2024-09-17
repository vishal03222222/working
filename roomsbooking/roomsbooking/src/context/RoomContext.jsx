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
import React,{createContext,useEffect,useState} from 'react';
import {roomData} from '../data';
export const Roomcontext =createContext();


const Roomprovider = ({children}) => {
  console.log(roomData);
  const[rooms,setrooms]=useState(roomData)
  return (
    <Roomcontext.Provider value={{rooms}}>
      {children}
    </Roomcontext.Provider>
  )
  
}

export default Roomprovider;
