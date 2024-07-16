import React from 'react'
import video from '../images/video/hero2.mp4'

const Home = () => {
  return (
    <div className='container-fluid flex flex-col md:flex-row bg-gray-950 pt-5 py-[7%] px-5'>
         <div className='md:w-1/2 w-full'>
            <h1 className='text-4xl font-["Black Ops One"] text-start p-2 font-bold text-yellow-500 hover:text-orange-600 ease-in-out duration-700'>Welcome to <br/><span className='text-orange-700 hover:text-yellow-500 ease-in-out duration-700'>My Hero Academia</span></h1>
            <p className='text-start md:text-justify text-xl w-[90%] md:w-[80%] text-white my-4'>Welcome to the ultimate archive of heroes and villains from My Hero Academia!  
                Here, you'll discover the incredible world of Quirks  - 
                the superpowers that define this extraordinary society. 
                Dive deep into the profiles of your favorite characters, analyze their unique abilities,
                 and explore how they harness their Quirks to create an epic world of heroism and villainy.
            </p>
            <button className='btn btn-warning px-3 py-2 border-orange-500 border-3 md:absolute left-[30%] m-3 hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-orange-500 hover:border-yellow-400 font-bold text-gray-800'>Plus Ultra!</button>
        </div>
        <div className='md:w-1/2 w-full object-fill md:object-cover'>
            <video autoPlay loop muted  className='w-full'><source src={video} type="video/mp4" /></video>
        </div>
       
    </div>
  )
}

export default Home
