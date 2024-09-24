import React from 'react'
import {furnitureData} from '../Info/data/furniture'

const Furniture = () => {
    const firstfiveimaegs =furnitureData.slice(0,5)

  return (
    <>
    <h2>furniture</h2>
     <div>
       {
         firstfiveimaegs.map((item)=>{
             return(<div className='prosection'>
                 {
                     <div className='imagebox'>
                         <img className='proimage' src={item.image} alt="" />
                     </div>
                 }
             </div>
             
             )
 
         })
       }
     </div>
    </>
  )
}

export default Furniture
