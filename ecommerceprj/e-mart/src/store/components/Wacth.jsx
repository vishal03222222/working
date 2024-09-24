import React from 'react'
import {watchData} from '../Info/data/watch'

const Wacth = () => {
    const firstfiveimaegs =watchData.slice(0,5)

    return (
      <>
      <div className='protitle'>
    <h2>watch</h2>
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

export default Wacth
