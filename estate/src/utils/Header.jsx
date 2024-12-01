import React from 'react'


const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='h-container'
             style={{
                // display: "flex", alignitems: "center",
                // justifycontent: "center"
            }}>
               <div>
               <img src="./logo.png" alt="logo" width={100} />
               </div>
                <div className='h-menu'>
                    <a href="">Residencies</a>
                    <a href="">our values</a>
                    <a href="">contact us</a>
                    <a href="">Get startes</a>
                    <button className='button'></button>
                    <a href="">Contact</a>
                </div>

            </div>
        </section>
    )
}

export default Header
