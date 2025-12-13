'use client'

import Image from 'next/image'
import { useState } from 'react'
import { profiles } from '../(data)/profiles'

export default function CharacterSlider() {
  const [index, setIndex] = useState(0)
  const total = profiles.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  const current = profiles[index]

  return (
    <div className='w-full max-w-4xl mx-auto p-4'>
      <div className='relative bg-gray-900 text-white rounded-xl overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 p-4 flex justify-center'>
            <Image src={current.image} alt={current.name} width={300} height={300} className='w-[300px] h-[300px] object-contain rounded-lg' />
          </div>
          <div className='w-full md:w-1/2 p-5'>
            <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>{current.name}</h2>
            <p className='text-orange-400 font-semibold mb-3'>{current.alias}</p>
            <p className='mb-1'><span className='font-semibold'>Quirk:</span> {current.quirk}</p>
            <p className='mb-6'><span className='font-semibold'>Birth:</span> {current.birth}</p>
            <div className='flex justify-between'>
              <button onClick={prev} className='px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md'>Prev</button>
              <button onClick={next} className='px-4 py-2 bg-orange-500 hover:bg-yellow-500 text-black font-semibold rounded-md'>Next</button>
            </div>
          </div>
        </div>

        <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
          {profiles.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-orange-500' : 'bg-gray-600'}`}></span>
          ))}
        </div>
      </div>
    </div>
  )
}
