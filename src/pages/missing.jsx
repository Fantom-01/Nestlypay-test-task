import React from 'react'
import { Link } from 'react-router-dom'

const missing = () => {
  return (
    <div>
        <Link to="/">Back Home</Link>
        This is not the page you are looking for..
    </div>
  )
}

export default missing