'use client'

import Image from 'next/image'
import Logo from "../../../public/logo.png"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuVisible, isMenuVisible] = useState(false)
  
  const toggleMenu = () => {
    isMenuVisible(!menuVisible)
  }

  return (
    <>
      <nav className='w-full flex justify-between items-center p-5'>
        <div className='w-auto'>
            <Image 
                src={Logo}
                width={120}
                height={120}
                alt='logo'
            />
        </div>

        {/* Desktop */}
        <div className='hidden md:flex md:w-1/2'>
            <ul className='flex justify-evenly items-center w-full'>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Home</Link></li>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>About</Link></li>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Character</Link></li>
                <li className='px-4 py-2 bg-[#a32a1d] hover:bg-[#6a3631] text-white hover:font-semibold rounded-lg ease-in-out duration-300'><Link href={'/'}>Plus Ultra</Link></li>
            </ul>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='md:hidden text-white text-2xl'>
          {menuVisible ? <i className="ri-close-line text-black"></i> : <i className="ri-menu-line text-black"></i>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className='md:hidden fixed inset-0 bg-[#d6cbba] w-screen h-screen z-50 flex flex-col justify-center items-center'>
          <button title='close' onClick={toggleMenu} className='absolute top-5 right-5 text-white text-3xl'>
            <i className="ri-close-line text-black"></i>
          </button>
          <ul className='flex flex-col justify-center items-center space-y-12 text-xl'>
            <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Home</Link></li>
            <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>About</Link></li>
            <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Character</Link></li>
            <li className='px-4 py-2 bg-[#a32a1d] hover:bg-[#6a3631] text-white hover:font-semibold rounded-lg ease-in-out duration-300'><Link href={'/'}>Plus Ultra</Link></li>
          </ul>
        </div>
      )}
    </>
  )
}
