import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navsection'>
        <div className="title">
           <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search...' />
        </div>
        <div className="user">
         
            <div className="userdetail">
                Signin /Signup
            </div>
            <Link to='/cart'>
          <div className="cart"> cart</div>
          </Link>
            
        </div>
      <div className="submenu">
        <ul>
          <Link to={'/mobile'}><li>Mobiles</li></Link>
          <Link to={'/Computer'}><li>Computer</li></Link>
          <Link to={'/wacth'}>  <li>Watches</li></Link>
          
          <Link to={'/men'}><li>Men fashion </li></Link>   
          <Link to={'/woman'}><li>Woman dressings</li></Link>
          <Link to={'/furniture'}><li>Furniters</li></Link>
          <Link to={'/ac'}>  <li>Ac</li></Link>
          <Link to={'/kicthen'}><li>Kicthen</li></Link>
          <Link to={'/Book'}><li>Books</li></Link>
          <Link to={'/speakers'}><li>Speakers</li></Link>
          <Link to={'/fridge'}><li>Fridge</li></Link>

          <Link to={'/tv'}><li>Tv</li></Link>
          
          
          
        
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar
