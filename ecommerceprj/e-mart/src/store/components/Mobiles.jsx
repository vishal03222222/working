import React from 'react'
import { mobileData } from '../Info/data/mobiles'
const Mobiles = () => {
    const firstfiveimaegs =mobileData.slice(0,5)
  return (
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
  )
}

export default Mobiles
