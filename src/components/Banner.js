import React from 'react'
import classIa from '../images/classa.jpg'

const Banner = () => {
  return (
    <div className='w-full h-screen  bg-gray-950 p-2'>
        <img className='w-full md:w-screen h-full md:h-screen object-cover object-center pt-20 pb-4' src={classIa} alt='myheroacademia group pic' />
    </div>
  )
}

export default Banner
