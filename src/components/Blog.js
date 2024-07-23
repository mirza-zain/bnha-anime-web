import React from 'react';
import manga1 from '../images/dead.jpg';
import manga2 from '../images/kachan.webp';

const Blog = () => {
  return (
    <div className='container-fluid bg-gray-950 p-4 md:p-5'>
      <h1 className='text-yellow-400 font-["Black_Ops_One"] font-bold text-4xl text-center p-3 md:p-5 '>Latest Blog</h1>
      <div className='flex flex-col md:flex-row bg-gray-950'>
        <div className='w-full md:w-[60%] flex flex-col md:flex-row'>
          <img className='w-full md:w-1/2 h-[90%] object-cover rounded-md' src={manga1} alt='bakugo' />
          <img className='w-full md:w-1/2 h-[50%] object-cover rounded-md' src={manga2} alt='bakugo' />
        </div>
        <div className='w-full md:w-[40%]'>
          <p className='text-white font-["Josefin_Sans"] font-bold text-xl p-4 md:p-5'>
            "Listen, Deku. You were always a pain in the ass, but... 
            you pushed me further than anyone. Don't you forget that.
             Get out there and be the damn hero you always dreamed of being. 
            See you on the other side, idiot."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
