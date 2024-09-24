import React from 'react'
import {menData} from '../Info/data/men'

const Men = () => {
    const firstfiveimaegs =menData.slice(0,5)

    return (
      <>
      <div className='protitle'>
    <h2>Men</h2>
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

export default Men
