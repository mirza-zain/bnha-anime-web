import React from 'react'
import classIa from '../images/classa.jpg'

const Banner = () => {
  return (
    <div className='w-full h-full bg-gray-950 pt-[8%] flex px-2'>
        <img className='w-full h-full md:h-1/2 object-cover pb-4' src={classIa} alt='myheroacademia group pic' />
    </div>
  )
}

export default Banner
