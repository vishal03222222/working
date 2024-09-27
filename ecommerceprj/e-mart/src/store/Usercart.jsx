import React from 'react'
import { usecart } from './context/Cartcontext'



const Usercart = () => {
    const {cartitems,addtocart}=usecart()
  return (
    <div>
        {cartitems.map((item)=>{
            return(
                <div className='cart-section'>
                    <div className="cart-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cart-details">
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>
                        <h3>{item.model}</h3>
                    </div>

                    
                </div>
            )
        })}
      
    </div>
  )
}

export default Usercart
