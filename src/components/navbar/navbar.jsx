import React from 'react'
import logoText from '../../assets/logotext.png'
import './navbar.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav>
        <img src={logoText} alt="" id="navLogo"/>
        <Link to="/masterauth">
          <button id="signInBtn">
            Sign In
          </button>
        </Link>
    </nav>
  )
}

export default navbar