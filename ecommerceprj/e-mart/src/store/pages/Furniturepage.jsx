import React from 'react'
import { furnitureData } from '../Info/data/furniture'
import Navbar from '../components/Navbar'

const Furniturepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {furnitureData.map((item)=>{
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

export default Furniturepage
