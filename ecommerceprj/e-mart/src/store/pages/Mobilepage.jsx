import React, { useState } from 'react'
import { mobileData } from  '../Info/data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  const [selectedproduct,setselectedproduct]=useState([]);
  const companyandler=(mango)=>{
    if(selectedproduct.includes(mango)){
      setselectedproduct(selectedproduct.filter(item=>item!==mango))

    }else{
      setselectedproduct([mango])
    }

  }
  return (
    <>
    <Navbar/>
    <div className="pro-selected">
      {mobileData.map((phone)=>{
        return(
          <div>
            <label htmlFor="">
              <input type="chekbox" 
              checked={selectedproduct.includes(phone.company)}
              onChange={()=>companyandler(phone.company)}/>
              {phone.company}
            </label>
          </div>
        )
      })}

    </div>
    <div className="fullpage">
    <div className='pagesection'>

{mobileData.map((item)=>{
    return(
        <div>
          <Link to={`/mobie/${item.id}`}>
          <div className='pageimg'>
                <img src={item.image} alt="" />
            </div>
          </Link>
            <div className='promodel'>
              {item.brand},{item.image}
                
            </div>
        </div>
    )
})}
  
</div>
    </div>
    </>
  )
}

export default Mobilepage
