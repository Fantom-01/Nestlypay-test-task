import React from 'react'
import { Link } from 'react-router-dom'
import Faces from '../../assets/FACES.png'
import './newusersignup.css'

const newusersignup = () => {
  return (
    <div>
      <section className='nSignUpSect'>
        <aside className='nSignUpAside'>
          <div className='topText--nSignUpAside'>
            <Link to="/">
              NESTLY PAY
            </Link>
          </div>
          <div className="middleText--nSignUpAside">
            <h3>Are you a Freelancer? <br/>Create a one time free invoice without signing in</h3>
            <span><img src={Faces} alt="" />Join 1,893 people</span>
          </div>
        </aside>
        <main className='nSignUpMain'>
          <h3>Create free invoice</h3>
          <p>Create a one time free invoice without signing up.</p>
          <form action="#">
            <input type="text" name="name" id="nameInput" placeholder='Full name' required/>
            <input type="email" name="email" id="emailInput" placeholder='Email Address' required/>
            <Link to="/confirm">
              <button>Create Now</button>
            </Link>
          </form>
          <p>Already Have an Account? <Link to="/signin">Sign In</Link></p>
        </main>
    </section>
    </div>
  )
}

export default newusersignup