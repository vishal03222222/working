import React from 'react'
import { booksData} from '../Info/data/books'
const Book = () => {
    const firstfiveimaegs =booksData.slice(0,5)

    return (
        <>
        <div className='protitle'>
      <h2>Books</h2>
     </div>
         <div className='prosection'>
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

export default Book
