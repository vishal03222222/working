import React, { useState } from 'react'
import { mobileData } from '../store/Info/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../store/components/Navbar'
 import {Usercart} from '../store/Usercart'
import { usecart } from '../store/context/Cartcontext'
const Mobilesingles = () => {
  const {addtocart, cartitems}=usecart
    const {id}=useParams()
    const product=mobileData.find((item)=>item.id)
  return (
    <>
    <Navbar/>
    <div className='ind-page'> 
    <div className="ind-image">
        <img src={product.image} alt="" />
    </div>
    <div className="ind-details">
      <div className="ind-company space"><h2>{product.company}</h2></div>
    <div className="ind-modelspace "><h3>{product.model}</h3></div>
    <div className="ind-price space"><h3>{product.price}</h3></div>
    <div className="ind-desc space"><p>{product.description}</p></div>
      
    </div>
    <button onClick={()=>addtocart(product)}>Add To Cart</button>
    </div>
    </>
    
  )
}

export default Mobilesingles
