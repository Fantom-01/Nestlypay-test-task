import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Faces from '../../assets/FACES.png'
import './signup.css'

const createinvoice = () => {
    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);

    function rendersecond() {
        setFirstStep(false)
        setSecondStep(true)
    }
    function renderthird() {
        setSecondStep(false)
        setThirdStep(true)
    }

  return (<>
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
      {firstStep && 
      <main className='nSignUpMain'>
        <h3>Personal Information</h3>
        <p style={{ width: '60%', fontSize: '12px', lineHeight: '1.8', color: 'GrayText'}}>Provide your legal name and work mail.</p>
        <form action="#" name='businessSignUp'>
          <input type="text" name="name" id="firstname" placeholder='First name' required/>
          <input type="text" name="name" id="lastname" placeholder='Last name' required/>
          <input type="email" name="email" id="emailInput" placeholder='Email Address' required/>
        <button onClick={rendersecond}>Continue</button>
        </form>
      </main>
      }
      {secondStep && 
        <main className='nSignUpMain' style={{ marginTop: "-100px" }}>
        <h3>Business Information</h3>
        <p style={{ width: '60%', fontSize: '12px', lineHeight: '1.8', color: 'GrayText'}}>Provide your business name, business mail and company address.</p>
        <form action="#" name='businessSignUp'>
            <input type="text" name="companyname" id="companyname" placeholder='Company Name' required/>
            <input type="email" name="companyemail" id="companyemail" placeholder='Company Email' required/>
            <input type="text" name="Addressone" id="Addressone" placeholder='Address One' required/>
            <input type="text" name="Addresstwo" id="Addresstwo" placeholder='Address Two' required/>
            <input type="text" name="cityinput" id="cityinput" placeholder='city' required/>
            <input type="text" name="cityinput" id="stateinput" placeholder='state' required/>
            <input type="text" name="cityinput" id="postalcodeinput" placeholder='postal code' required/>
            <input type="text" name="cityinput" id="countryinput" placeholder='country' required/>
            <input type="text" name="siteinput" id="siteinput" placeholder='website(optional)'/>
            <button onClick={renderthird}>Continue</button>
        </form>
      </main>
      }
      {thirdStep && 
        <main className='nSignUpMain'>
        <h3>One Last Step</h3>
        <p style={{ width: '60%', fontSize: '12px', lineHeight: '1.8', color: 'GrayText'}}>Avoid easily guessable password, and make sure it is easy to remember.</p>
        <form action="#" name='businessSignUp'>
            <input type="password" name="name" id="firstname" placeholder='Password' required/>
            <input type="password" name="name" id="lastname" placeholder='Confirm Password' required/>
            <Link to="/">
              <button>Create Account</button>
            </Link>
        </form>
      </main>
      }
    </section>
  </>)
}

export default createinvoice