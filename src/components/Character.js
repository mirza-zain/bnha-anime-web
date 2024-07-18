import profiles from '../Character-Profiles/profiles';

const Character = () => {
  return (
    <div id='#character'>
        {
          profiles.map(pro => {
            return ( 
          <div key={pro.id} className='flex bg-gray-950 pt-24'>
            <div className='w-full md:w-1/2 bg-yellow-300 flex justify-center items-center'> 
              <img src={pro.image} alt={pro.name} className='w-[50%] md:w-[25%] h-[100%] object-cover object-center'/> 
            </div>
            <div className='md:w-1/2 bg-orange-400'>
                <h2 className='font-bold font-["Black_Ops_One"] text-center text-2xl text-red-200 my-2'>{pro.name}</h2>
                <h2 className='text-gray-300 font-semibold text-xl mx-5 mb-2'>Alias: <span>{pro.alias}</span></h2>
                <p className='text-gray-300 text-xl text-justify mx-5'>{pro.bio}</p>
                <h3 className='text-gray-300 font-semibold text-xl mx-5 mb-2'>Quirk: <span>{pro.quirk}</span></h3>
                <h3 className='text-gray-300 font-semibold text-xl mx-5 mb-2'>Birthday: <span>{pro.birth}</span></h3>
                <h3 className='text-gray-300 font-semibold text-xl mx-5'>Gender: <span>{pro.gender}</span></h3>
            </div>
          </div>
        )})
        }
    </div>
  );
};

export default Character;