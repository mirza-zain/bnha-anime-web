import React, { useEffect } from 'react'
import hero from '../images/midoriya1.webp'

const Character = () => {
  return (
    <div className='w-full h-[40%] bg-gray-950 pt-5'>
      <h2 className='text-orange-400 font-["Black Ops One"] font-bold text-2xl text-center pb-4'>Welcome To Character Profile</h2>
      <div className='flex flex-col md:flex-row bg-gray-950'>
        <div className='slideshow-container w-[50%] md:w-[30%] translate-x-1/2 md:translate-x-0'>
            <img src={hero} alt='hero' className=' w-full md:w-[75%] md:h-[50%] object-cover md:object-top'/>
        </div>
        <div className='w-full md:w-[70%]'>
            <h3 className='font-bold font-["Black Ops One"] text-center text-2xl text-cyan-300 my-2'>Izuku Midoriya</h3>
        </div>
      </div>
    </div>
  )
}

export default Character
