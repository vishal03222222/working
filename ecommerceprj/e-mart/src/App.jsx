import React from 'react';
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Landingpage from './store/pages/Landingpage';

import Mobilepage from './store/pages/Mobilepage'

import Kicthenspage from './store/pages/kicthenspage';

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
import Mobilesingles from './singles/Mobilesingles';
import Usercart from './store/Usercart';




const App = () => {
  return (
    <div>
      
      <Routes> 
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/kicthen' element={<Kicthenspage/>}/>
      <Route path='/mobile' element={<Mobilepage/>}/>
      <Route path='/computer' element={<Computerpage/>}/>
      <Route path='/wacth' element={<Wacthpage/>}/>
    
      <Route path='/furniture' element={<Furniturepage/>}/>
   
      <Route path='/ac' element={<Acpage/>}/>
      <Route path='/men' element={<Menpage/>}/>
      <Route path='/woman' element={<Womanpage/>}/>
    
      <Route path='/mobie/:id' element={<Mobilesingles/>}/>
      
<Route path='/cart' element={<Usercart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
