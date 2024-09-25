import React from 'react'
import { kitchenData } from '../Info/data/kitchen'
import Navbar from '../components/Navbar'

const kicthenpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {kitchenData.map((item)=>{
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

export default kicthenpage
