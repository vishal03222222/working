import React from 'react'
import { tvData } from '../Info/data/tv'
import Navbar from '../components/Navbar'

const Tvpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {tvData.map((item)=>{
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

export default Tvpage
