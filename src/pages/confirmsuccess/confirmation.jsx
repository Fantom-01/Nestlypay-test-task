import React from 'react'
import { Link } from 'react-router-dom'
import "./confirmation.css"
import Icon from '../../assets/SUCCESSICON.png'

const confirmation = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <section className='confirmsuccess'>
        <img src={Icon} alt="" />
        <h3 className="confirmsuccess--h3">Success</h3>
        <p className="confirmsuccess--p">Click the link in your email to create a new invoice</p>
      </section>
    </Link>
  )
}

export default confirmation