import React from 'react'
import {acData} from '../Info/data/ac'

const Ac = () => {
    const firstfiveimaegs =acData.slice(0,5)

    return (
      <>
      <h2>Ac</h2>
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

export default Ac
