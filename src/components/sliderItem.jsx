import React from 'react'
import '../styles/slidersect.css'

const sliderItem = ({ heading, paragraph, image }) => {
  return (
    <div className="card">
        <main className="text">
            <h3 className='slider--h3'>{heading}</h3>
            <p className='slider--p'>{paragraph}</p>
        </main>
        <img src={image} alt="" className='slider--img'/>
    </div>
  )
}

export default sliderItem