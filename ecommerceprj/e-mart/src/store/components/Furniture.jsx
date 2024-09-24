import React from 'react'
import {furnitureData} from '../Info/data/furniture'

const Furniture = () => {
    const firstfiveimaegs =furnitureData.slice(0,5)

  return (
    <>
    <div className='protitle'>
    <h2>Furniture</h2>
   </div>
     <div className='prosection'>
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
