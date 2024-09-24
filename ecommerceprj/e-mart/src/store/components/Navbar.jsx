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
      
    </div>
  )
}

export default Navbar
