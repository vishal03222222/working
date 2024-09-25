import React from 'react'
import { speakerData } from '../Info/data/speaker'
import Navbar from '../components/Navbar'

const Speakerpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {speakerData.map((item)=>{
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

export default Speakerpage
