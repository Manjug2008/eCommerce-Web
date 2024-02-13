import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  '/images/slider-image-1.png',
  '/images/slider-image-2.png',
  '/images/slider-image-3.png'
]

const SliderComponent = () => {
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

  return (
    <div className="slide-container -mx-5">
    <Zoom {...zoomOutProperties}>
      {
        images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
      }
    </Zoom>
  </div>
  )
}

export default SliderComponent