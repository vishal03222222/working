import React from 'react'
import { fridgeData } from '../Info/data/fridge'
import Navbar from '../components/Navbar'

const Fridgepage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {fridgeData.map((item)=>{
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

export default Fridgepage
