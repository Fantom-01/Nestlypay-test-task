import React from 'react'
import '../styles/slidersect.css'

const sliderItem = ({ heading, paragraph, image }) => {
  return (
    <div className="card">
        <main className="text">
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </main>
        <img src={image} alt=""/>
    </div>
  )
}

export default sliderItem