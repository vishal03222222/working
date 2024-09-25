import React from 'react'
import { womanData } from '../Info/data/woman'

const Womanpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {womanData.map((item)=>{
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

export default Womanpage
