import React,{createContext,useEffect,useState} from 'react'
import { roomData } from '../data'
export const RoomContext=createContext();


const Roomprovider = ({children}) => {
  console.log(roomData)
  return <RoomContext.Provider value={'room context'}>
    {children}

  </RoomContext.Provider>
    
}

export default RoomContext
