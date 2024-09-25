import React from 'react'
import { computerData } from '../Info/data/computers'
import Navbar from '../components/Navbar'

const Computerpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {computerData.map((item)=>{
        return(
            <div>
                <div className='pageimg'>
                    <img src={item.image} alt="" />
                </div>
                <div className='promodel'>
                  {item.brand},{item.image}
                    
                </div>
            </div>
        )
    })}
      
    </div>
    </>
  )
}

export default Computerpage
