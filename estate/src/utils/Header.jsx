import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'
             style={{
                // display: "flex", alignitems: "center",
                // justifycontent: "center"
            }}>
               <div>
               <img src="./logo.png" alt="logo" width={100} />
               </div>
                <div className='flexCenter h-menu'>
                    <a href="">Residencies</a>
                    <a href="">our values</a>
                    <a href="">contact us</a>
                    <a href="">Get startes</a>
                    <button className='button'><a href="">Contact</a></button>
                    
                </div>

            </div>
        </section>
    )
}

export default Header
