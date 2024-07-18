import React from 'react'
import profiles from '../Character-Profiles/profiles'

const Character = () => {
  return (
    <>
    <div className='w-full h-[40%] bg-gray-950 pt-5'>
      <h2 className='text-orange-400 font-["Black Ops One"] font-bold text-2xl text-center pb-4'>Welcome To Character Profile</h2>
      <div className='flex flex-col md:flex-row bg-gray-950 flex-wrap'>
        {
          profiles.map((pfp) => {
            return <>
            <div className='w-[50%] md:w-[30%] translate-x-1/2 md:translate-x-0'>
              <img src={pfp.image} alt='hero' className=' w-full md:w-[75%] md:h-[50%] object-cover md:object-top' />
            </div>
              <div className='w-full md:w-[70%]'>
                <h2 className='font-bold font-["Black Ops One"] text-center text-2xl text-cyan-300 my-2'>{pfp.name}</h2>
                <h2 className='text-gray-300 font-semibold text-xl mx-10 px-5 mb-2 mt-5'>Alias: {pfp.alias}</h2>
                <p className='text-gray-300 w-[90%] text-xl text-justify mx-10 px-5 '>{pfp.bio}</p>
                <h3 className='text-gray-300 font-semibold text-xl mx-10 px-5 mb-2 mt-3'>Quirk: {pfp.quirk}</h3>
                <h3 className='text-gray-300 font-semibold text-xl mx-10 px-5 mb-2 mt-3'>Birthday: {pfp.birth}</h3>
                <h3 className='text-gray-300 font-semibold text-xl mx-10 px-5 mb-2 mt-3'>Gender: {pfp.gender}</h3>
              </div>
            </>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Character
