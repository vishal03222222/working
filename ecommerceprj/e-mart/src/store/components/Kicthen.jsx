import React from 'react'
import {kitchenData} from '../Info/data/kitchen'

const Kicthen = () => {
    const firstfiveimaegs =kitchenData.slice(0,5)

    return (
      <>
      <div className='protitle'>
      <h2>kitchen</h2>
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

export default Kicthen
