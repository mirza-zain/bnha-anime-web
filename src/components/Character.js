import {React, useState} from 'react';
import profiles from '../Character-Profiles/profiles';
import sensai from '../Character-Profiles/sensai';

const Character = () => {
  const [currProfile, setProfile] = useState(profiles);
  const [activeButton, setActiveButton] = useState('profiles');

  const showProfiles = () => {
    setProfile(profiles);
    setActiveButton('profiles');
  }
  const showSensai = () => {
    setProfile(sensai);
    setActiveButton('sensai');
  }

  return (
    <div id='#character' className='bg-gray-950 pt-3'>
      <div className='w-full items-center md:justify-between flex flex-col md:flex-row mt-[5%]'>
        <h1 className='text-white text-center font-bold text-4xl font-["Black_Ops_One"] px-5'>CHARACTER PROFILE</h1>
        <div className='px-4 '>
        <button className={`px-4 py-2 bg-yellow-300 border-2 border-orange-500 font-bold font-["Josefin_Sans"] ease-in-out duration-300 ${activeButton === 'profiles' ? 'bg-emerald-600 text-black' : ''}`} onClick={showProfiles}>Class I-A</button>
        <button className={`px-4 py-2 bg-yellow-300 border-2 border-orange-500 font-bold font-["Josefin_Sans"] ease-in-out duration-300 ${activeButton === 'sensai' ? 'bg-emerald-600 text-black' : ''}`} onClick={showSensai}>Sensai</button>        
      </div>
      </div>
      <div className='px-4 w-full h-full flex flex-1 bg-gray-950 pt-5 gap-[8%] overflow-scroll m-0'>
        {
          currProfile.map(pro => {
            return ( 
              <div key={pro.id} className='w-screen h-screen bg-gray-950'> 
                <img src={pro.image} alt={pro.name} className='w-full h-[35%] md:h-1/2 object-cover object-top rounded-md'/> 
                <h2 className='font-bold font-["Josefin_Sans"] text-center text-lg md:text-2xl text-orange-300'>{pro.name}</h2>
                <h2 className='text-white font-bold text-lg md:text-xl mb-0 md:mb-2'>Alias: <span className='font-semibold text-sm md:text-lg text-yellow-400'>{pro.alias}</span></h2>
                <h3 className='text-white font-bold text-lg md:text-xl mb-0 md:mb-2'>Quirk: <span className='font-semibold text-sm md:text-lg text-yellow-400'>{pro.quirk}</span></h3>
                <h3 className='text-white font-bold text-lg md:text-xl mb-0 md:mb-2'>Birthday: <span className='font-semibold text-sm md:text-lg text-yellow-400'>{pro.birth}</span></h3>
              </div>
              )})
            }
      </div>
    </div>
  );
};

export default Character;