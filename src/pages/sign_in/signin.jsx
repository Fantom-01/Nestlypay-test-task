import React from 'react'
import { Link } from 'react-router-dom'
import Faces from '../../assets/FACES.png'

const signin = () => {
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
          <h3>Welcome Back!</h3>
          <p>Pick up where you left off.</p>
          <form action="#">
            <input type="email" name="email" id="emailInput" placeholder='Email Address' required/>
            <input type="password" name="password" id="passwordInput" placeholder='Password' required/>
            <Link to="/">
              <button>Sign In</button>
            </Link>
          </form>
          <p>Don't Have an Account? <Link to="/signup">Create One</Link></p>
        </main>
    </section>
  )
}

export default signin