import React from 'react'
import { Link } from 'react-router-dom'
import Faces from '../../assets/FACES.png'

const signup = () => {
  return (
    <section className='nSignUpSect'>
        <aside className='nSignUpAside'>
          <div className='topText--nSignUpAside'>
            <Link to="/">
              NESTLY PAY
            </Link>
          </div>
          <div className="middleText--nSignUpAside">
            <h3>Start taking steps to manage your business now.</h3>
            <span><img src={Faces} alt="" />Join 1,893 people</span>
          </div>
        </aside>
        <main className='nSignUpMain'>
          <h3>Create An Account</h3>
          <p style={{ width: '60%', fontSize: '12px', lineHeight: '1.8', color: 'GrayText'}}>Tell us a bit about you. Provide your legal name, work mail and home address.</p>
          <form action="#">
            <input type="text" name="name" id="nameInput" placeholder='Full name' required/>
            <input type="email" name="email" id="emailInput" placeholder='Email Address' required/>
            <input type="password" name="password" id="passwordInput" placeholder='Password' required/>
            <Link to="/">
              <button>Create Now</button>
            </Link>
          </form>
        </main>
    </section>
  )
}

export default signup