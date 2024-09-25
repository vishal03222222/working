import React from 'react'
import { fridgeData } from '../Info/data/fridge'

const Fridge = () => {
    const firstfiveimaegs =fridgeData.slice(0,5)

    return (
        <>
        <div className='protitle'>
      <h2>fridge</h2>
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

export default Fridge
