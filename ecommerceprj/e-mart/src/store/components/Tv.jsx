import React from 'react'
import { tvData }
from '../Info/data/tv'
const Tv = () => {
    const firstfiveimaegs =tvData.slice(0,5)

    return (
        <>
        <div className='protitle'>
      <h2>Books</h2>
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

export default Tv
