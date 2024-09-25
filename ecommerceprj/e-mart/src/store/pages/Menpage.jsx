import React from 'react'
import { menData } from '../Info/data/men'
import Navbar from '../components/Navbar'

const Menpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {menData.map((item)=>{
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

export default Menpage
