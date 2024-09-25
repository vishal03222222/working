import React from 'react'
import { watchData } from '../Info/data/watch'
import Navbar from '../components/Navbar'

const Wacthpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
    {watchData.map((item)=>{
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

export default Wacthpage
