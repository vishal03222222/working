import React from 'react'

import { womanData } from '../Info/data/woman'
const Woman = () => {
    const firstfiveimaegs =womanData.slice(0,5)

    return (
      <>
      <h2>woman</h2>
       
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
       
      </>
    )
}

export default Woman
