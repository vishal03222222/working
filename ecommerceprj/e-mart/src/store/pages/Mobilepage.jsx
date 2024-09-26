import React, { useState } from 'react'
import { mobileData } from '../Info/data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  const [selectedproduct, setselectedproduct] = useState([]);
  const companyandler = (mango) => {
    if (selectedproduct.includes(mango)) {
      setselectedproduct(selectedproduct.filter(item => item !== mango))

    } else {
      setselectedproduct([...selectedproduct,mango])
    }

  }
  const filterproduct= selectedproduct.length===0?
  mobileData :mobileData.filter((orange)=>selectedproduct.includes(orange.company))
  return (
    <>
      <Navbar />
      <div className="pro-selected">
        {mobileData.map((phone) => {
          return (
            <div className='pro-input'>
              <label htmlFor="">
                <input type="chekbox"
                  checked={selectedproduct.includes(phone.company)}
                  onChange={() => companyandler(phone.company)} />
                {phone.company}
              </label>
            </div>
          )
        })}

      </div>
      <div className="fullpage">
        <div className='pagesection'>

          {filterproduct.map((item) => {
            return (
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
