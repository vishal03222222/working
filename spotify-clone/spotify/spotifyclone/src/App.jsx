import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { Playercontext } from './context/Playercontext'


const App = () => {
  const {audioref} =useContext(Playercontext)
  return (
    <div>
      <div className="h-screen bg-black">
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
        <audio ref={audioref} preload='auto'></audio>
       


      </div>
      
    </div>
  )
}

export default App
