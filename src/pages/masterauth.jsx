import React from 'react'
import { Link } from 'react-router-dom'
import FireIcon from '../assets/FireIcon.png'
import FileIcon from '../assets/FileIcon.png'
import Faces from '../assets/FACES.png'
import '../styles/masterauth.css'

const masterauth = () => {
  return (
    <section className='MauthSect'>
      <aside className='MauthAside'>
        <div className='topText--MauthAside'>
          <Link to="/">
            NESTLY PAY
          </Link>
        </div>
        <div className="middleText--MauthAside">
          <h3>Start taking steps to manage your business now.</h3>
          <span><img src={Faces} alt="" />Join 1,893 people</span>
        </div>
      </aside>
      <main className='MauthMain'>
        <h3>Choose your account type</h3>
        <p>Get a downloadable receipt on every invoice payment as a reference to help your business in management and accounting</p>
        <Link to="/blogin">
          <div className='MauthMain--div'>
            <img src={FireIcon} alt="" />
            <div className="texts">
              <h3>Business</h3>
              <p>Create invoices as a business</p>
            </div>
          </div>
        </Link>
        <Link to="/newuser">
          <div className='newuser--div'>
            <img src={FileIcon} alt="" />
            <div className="texts">
              <h3>Personal</h3>
              <p>Create a one-time invoice as a freelancer</p>
            </div>
          </div>
        </Link>
      </main>
    </section>
  )
}

export default masterauth