import React from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div>
      <div className="h-screen bg-black">
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
       


      </div>
      
    </div>
  )
}

export default App
