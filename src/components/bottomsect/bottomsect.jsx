import React from 'react'
import './bottomsect.css'
import phoneImg from '../../assets/sliderImages/phoneA1.png'
import dashboardImg from '../../assets/AccountDashboard.png'
import { Link } from 'react-router-dom'

const bottomsect = () => {
  return (
    <section className="bottomsect">
        <div className="texthalf">
            <h2>Ready to Grow Your Business in One Solution?</h2>
            <p>Say hello to Nestlypay, a platform that enables you to send professional invoices, save time, digitalize your bills and manage your business in minutes.</p>
            <Link to="/masterauth"><button className="texthalf--btn">Get Started</button></Link>
        </div>
        <div className="imagehalf">
            <img src={phoneImg} alt="" id="bottomsect--phoneImg"/>
            <img src={dashboardImg} alt="" id="bottomsect--dashboardImg" />
        </div>
    </section>
  )
}

export default bottomsect