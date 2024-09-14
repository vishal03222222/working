import React from 'react'
import './main.css'
import { assets } from '../../assets/assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span> Hello, Dev.</span></p>
                    <p>How can i help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>suggest beatiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Brefily summarize this concept
                            :urban planning
                        </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve te readability of te  following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may include inaccurate info, including about people, so double check its response. your privacy matters.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Main
