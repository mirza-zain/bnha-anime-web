import profiles from '../Character-Profiles/profiles';

const Character = () => {
  return (
    <div id='#character'>
      <div className='p-5 w-full h-1/2 flex bg-gray-950 pt-24 gap-10 overflow-hidden overflow-x-scroll '>
        {
          profiles.map(pro => {
            return ( 
              <div key={pro.id} className='w-full h-screen bg-gray-950'> 
              <img src={pro.image} alt={pro.name} className='w-full h-1/2 object-cover object-top'/> 
            {/* </div>
            <div className='md:w-1/2 bg-orange-400'> */}
                <h2 className='font-bold font-["Black_Ops_One"] text-center text-2xl text-red-200'>{pro.name}</h2>
                <h2 className='text-white font-semibold text-xl mb-2'>Alias: <span>{pro.alias}</span></h2>
                <h3 className='text-white font-semibold text-xl mb-2'>Quirk: <span>{pro.quirk}</span></h3>
                <h3 className='text-white font-semibold text-xl mb-2'>Birthday: <span>{pro.birth}</span></h3>
                </div>
              )})
            }
      </div>
    </div>
  );
};

export default Character;