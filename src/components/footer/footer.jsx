import React from 'react'
import '../../assets/fa/css/all.css'
import './footer.css'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer--icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <p>help@nestlypay.co</p>
      <p>© 2022. NestlyPay Limited All rights reserved</p>
    </footer>
  )
}

export default footer