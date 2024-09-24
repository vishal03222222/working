import React from 'react'

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
            <div className="cart"> cart</div>
        </div>
      <div className="submenu">
        <ul>
          <li>Mobiles</li>
          <li>Computer</li>
          <li>Watches</li>
          <li>Men fashion </li>
          <li>Woman dressings</li>
          <li>Furniters</li>
          <li>Ac</li>
          <li>Kicthen</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
