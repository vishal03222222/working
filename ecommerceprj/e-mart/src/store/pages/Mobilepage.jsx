import React from 'react'
import { mobileData } from  '../Info/data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  return (
    <>
    <Navbar/>
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
    </>
  )
}

export default Mobilepage
