import React from 'react'
import { booksData } from '../Info/data/books'
import Navbar from '../components/Navbar'

const Bookpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pagesection'>
        {booksData.map((item)=>{
            return(
                <div>
                    <div className='pageimg'>
                        <img src={item.image} alt="" />
                    </div>
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

export default Bookpage
