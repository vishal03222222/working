// import React, { useContext } from 'react'
// import './main.css'
// import { assets } from '../../assets/assets/assets'
// import { context } from '../../context/Context'

// const Main = () => {
//     const {
//         onsent,

//         recentprompt,
//         showresult,
//         loading,
//         resultdata,
//         input, setinput } = useContext(context)
//     return (
//         <div className='main'>
//             <div className="nav">
//                 <p>Gemini</p>
//                 <img src={assets.user_icon} alt="" />
//             </div>
//             <div className="main-container">
//                 {!showresult ? <>
//                     <div className="greet">
//                         <p><span> Hello, Dev.</span></p>
//                         <p>How can i help you today</p>
//                     </div>
//                     <div className="cards">
//                         <div className="card">
//                             <p>suggest beatiful places to see on an upcoming road trip</p>
//                             <img src={assets.compass_icon} alt="" />
//                         </div>
//                         <div className="card">
//                             <p>Brefily summarize this concept: urban planning </p>
//                             <img src={assets.bulb_icon} alt="" />
//                         </div>
//                         <div className="card">
//                             <p>Brainstrom team bonding activities for our work retreat</p>
//                             <img src={assets.message_icon} alt="" />
//                         </div>
//                         <div className="card">
//                             <p>Improve te readability of te  following code</p>
//                             <img src={assets.code_icon} alt="" />
//                         </div>
//                     </div>
//                 </> : <div className='result'>
//                     <div className='resulttitle'>
//                         <img src={assets.user_icon} alt="" />
//                         <p>{recentprompt}</p>

//                     </div>
//                     <div className="resultdata">
//                         <img src={assets.gemini_icon} alt="" />
//                         {loading
//                             ? <div className='loader'>
//                                 <hr />
//                                 <hr />
//                                 <hr />
//                             </div>
//                             : <p dangerouslySetInnerHTML={{ __html: resultdata }}> </p>
//                         }

//                     </div>

//                 </div>
//                 }

//                 <div className="main-bottom">
//                     <div className="search-box">
//                         <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
//                         <div>
//                             <img src={assets.gallery_icon} alt="" />
//                             <img src={assets.mic_icon} alt="" />
//                             {input ? <img onClick={() => onsent()} src={assets.send_icon} alt="" />
//                                 : null} </div>
//                     </div>
//                     <p className="bottom-info">
//                         Gemini may include inaccurate info, including about people, so double check its response. your privacy matters.
//                     </p>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Main
import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets/assets'
import { context } from '../../context/Context'

const Main = () => {
    const { 
        onsent,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input, setinput } = useContext(context)
    
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showresult ? 
                <>
                 <div className="greet">
                    <p><span> Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Briefly summarize this concept: Urban Planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </> :
                <div className='result'>
                    <div className='resulttitle'>
                        <img src={assets.user_icon} alt="" />
                        <p>{recentprompt}</p>
                    </div>
                    <div className="resultdata">
                        <img src={assets.gemini_icon} alt="" />
                        {
                            loading ? 
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />    
                            </div>
                            :<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                        }
                    </div>
                </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onsent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may include inaccurate info, including about people, so double-check its response. Your privacy matters.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
