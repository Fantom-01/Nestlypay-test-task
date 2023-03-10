import Home from './pages/home/home'
import MasterAuth from './pages/masterauth/masterauth'
import BusLogin from './pages/business_signup/buslogin'
import Createinvoice from './pages/createinvoice/createinvoice'
import Confirmation from './pages/confirmsuccess/confirmation'
import SignIn from './pages/sign_in/signin'
import SignUp from './pages/signup/signup'
import BsignUp from './pages/signup/bsignup'
import Missing from './pages/missing'

import './index.css'
import { Route, Routes } from  'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/masterauth" element={<MasterAuth/>}/>
      <Route path="/blogin" element={<BusLogin/>}/>
      <Route path="/createinvoice" element={<Createinvoice/>}/>
      <Route path="/confirm" element={<Confirmation/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/bsignup" element={<BsignUp/>}/>
      <Route path="*" element={<Missing/>}/>
    </Routes>
  )
}

export default App
