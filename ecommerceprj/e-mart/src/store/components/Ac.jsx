import React from 'react'
import {acData} from '../Info/data/ac'

const Ac = () => {
    const firstfiveimaegs =acData.slice(0,5)

    return (
      <>
      <div className='protitle'>
    <h2>AC</h2>
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

export default Ac
