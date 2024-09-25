import React from 'react'
import{ speakerData }from '../Info/data/speaker'

const Speakers = () => {
    const firstfiveimaegs =speakerData.slice(0,5)

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

export default Speakers
