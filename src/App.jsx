import Home from './pages/home'
import MasterAuth from './pages/masterauth'
import BusLogin from './pages/buslogin'
import NewUserSignUp from './pages/newusersignup'
import Missing from './pages/missing'

import './index.css'
import { Route, Routes } from  'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/masterauth" element={<MasterAuth/>}/>
      <Route path="/blogin" element={<BusLogin/>}/>
      <Route path="/newuser" element={<NewUserSignUp/>}/>
      <Route path="*" element={<Missing/>}/>
    </Routes>
  )
}

export default App
