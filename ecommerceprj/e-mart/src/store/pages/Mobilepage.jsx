import React from 'react'
import { mobileData } from  '../Info/data/mobiles'
import Navbar from '../components/Navbar'

const Mobilepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {mobileData.map((item)=>{
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

export default Mobilepage
