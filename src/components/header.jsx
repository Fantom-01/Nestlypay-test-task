import React from 'react'
import '../styles/header.css'
import dashboardImg from '../assets/AccountDashboard.png'
import LongArrowRight from '../assets/longArrow.png'

const header = () => {
  return (
    <header>
        <div className="header--div1">
            <h1 className="header--h1">Connecting Businesses for Simplified Payments.</h1>
            <p className="header--p">Create and send invoices, manage your finance, track sales, and get paid faster.</p>
            <button className="header--btn">Create free Invoice</button>
        </div>
        <div className="header--div2">
            <img src={dashboardImg} alt="" className="dashboardImg"/>
            <p>Never chase a client again. Speed up your cash flow and manage our business at your fingertips. Let Nestlypay help with the hard work, while you focus on your business.</p>
            <span>Get a fast invoice today <img src={LongArrowRight} alt="" /></span>
        </div>
    </header>
  )
}

export default header