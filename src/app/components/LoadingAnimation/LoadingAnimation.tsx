
import React from "react"
import loader from '../../../../public/images/Loader/loader.json'
import Lottie from 'lottie-react'


function LoadingAnimation() {
  
  return (
       <div className="h-full w-full flex justify-center items-center">
        <Lottie animationData={loader} className="w-[150px] h-[150px]"/>
      </div>

       
  )
}

export default LoadingAnimation
