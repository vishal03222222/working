import React from 'react'
import {computerData} from '../Info/data/computers'

const Computers = () => {
  
    const firstfiveimaegs =computerData.slice(0,5);
    return (
     <>
     <h2>computers</h2>
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

export default Computers
