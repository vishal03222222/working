import React from 'react'
import { acData } from '../Info/data/ac'
import Navbar from '../components/Navbar'


const Acpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {acData.map((item)=>{
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

export default Acpage
