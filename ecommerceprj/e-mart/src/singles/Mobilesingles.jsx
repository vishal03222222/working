import React from 'react'
import { mobileData } from '../store/Info/data/mobiles'
import { useParams } from 'react-router-dom'
const Mobilesingles = () => {
    const {id}=useParams()
    const product=mobileData.find((item)=>item.id)
  return (
    <div className='ind-page'> 
    <div className="ind-image">
        <img src={product.image} alt="" />
    </div>
    <div className="ind-details">
    <div className="ind-model"><h3>{product.model}</h3></div>
    <div className="ind-price"><h3>{product.price}</h3></div>
    <div className="ind-desc"><p>{product.description}</p></div>
      
    </div>
    </div>
  )
}

export default Mobilesingles
