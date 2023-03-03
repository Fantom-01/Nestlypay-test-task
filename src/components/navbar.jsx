import React from 'react'
import logoText from '../assets/logotext.png'
import '../styles/navbar.css'

const navbar = () => {
  return (
    <nav>
        <img src={logoText} alt="" id="navLogo"/>
        <button id="signInBtn">Sign In</button>
    </nav>
  )
}

export default navbar