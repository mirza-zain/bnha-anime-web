import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-gray-900 text-yellow-200 p-4'>
        <div className='flex flex-col items-center'>
            <h2 className='font-["Josefin_Sans"] font-bold text-xl'>BNHA FAN PAGE</h2>
            <ul className='flex text-2xl gap-4 text-white'>
                <li className='hover:text-cyan-800 duration-500 ease-in-out'><a href='https://www.instagram.com/mirza_zain43/' target='_blank' rel='noreferrer'><i class="ri-instagram-fill"></i></a></li>
                <li className='hover:text-cyan-800 duration-500 ease-in-out'><a href='https://www.linkedin.com/in/mirza-zain269/' target='_blank' rel='noreferrer'><i class="ri-linkedin-fill"></i></a></li>
                <li className='hover:text-cyan-800 duration-500 ease-in-out'><a href='https://github.com/mirza-zain' target='_blank' rel='noreferrer'><i class="ri-github-fill"></i></a></li>
            </ul>
            <h4 className='text-lg'>Made with efforts 💕  ©copyright-2024</h4>
        </div>
    </footer>
    </>
  )
}

export default Footer
