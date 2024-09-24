import React from 'react'
import { mobileData } from '../Info/data/mobiles'
const Mobiles = () => {
    const firstfiveimaegs = mobileData.slice(0, 5)
    return (
        <>
           <div className='protitle'>
    <h2>Mobiles</h2>
   </div>
            <div className='prosection'>
                {
                    firstfiveimaegs.map((item) => {
                        return (<div className='prosection'>
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

export default Mobiles
