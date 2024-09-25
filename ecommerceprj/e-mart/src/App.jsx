import React from 'react';
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Landingpage from './store/pages/Landingpage';

import Mobilepage from './store/pages/Mobilepage'

import kicthenpage from './store/pages/kicthenpage'

import Acpage from './store/pages/Acpage';
import Computerpage from './store/pages/Computerpage';
import Bookpage from './store/pages/Bookpage';
import Fridgepage from './store/pages/Fridgepage';
import Furniturepage from './store/pages/Furniturepage';
import Menpage from './store/pages/Menpage';
import Womanpage from './store/pages/Womanpage';
import Wacthpage from './store/pages/Wacthpage';
import Speakerpage from './store/pages/Speakerpage';
import Tvpage from './store/pages/Tvpage';




const App = () => {
  return (
    <div>
      
      <Routes> 
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/kicthen' element={<kicthenpage/>}/>
      <Route path='/mobile' element={<Mobilepage/>}/>
      <Route path='/computer' element={<Computerpage/>}/>
      <Route path='/wacth' element={<Wacthpage/>}/>
      <Route path='/fridge' element={<Fridgepage/>}/>
      <Route path='/furniture' element={<Furniturepage/>}/>
      <Route path='/speakers' element={<Speakerpage/>}/>
      <Route path='/tv' element={<Tvpage/>}/>
      
      <Route path='/ac' element={<Acpage/>}/>
      <Route path='/men' element={<Menpage/>}/>
      <Route path='/woman' element={<Womanpage/>}/>
      <Route path='/Book' element={<Bookpage/>}/>
      

      </Routes>
      
    </div>
  )
}

export default App
