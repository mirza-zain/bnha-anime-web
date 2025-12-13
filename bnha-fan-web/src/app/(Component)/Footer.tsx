import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full h-1/2 bg-[#0f1516] text-white p-5 flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="w-full md:w-1/2">
            <img src={'/logo.png'} className="w-1/4" alt="logo" />
        </div>
        <div className="w-full md:w-1/2">
            <ul className='flex flex-row justify-evenly items-center'>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Home</Link></li>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>About</Link></li>
                <li className='hover:text-[#a32a1d] font-semibold ease-in-out duration-300'><Link href={'/'}>Character</Link></li>
                <li className='px-4 py-2 bg-[#a32a1d] hover:bg-[#6a3631] text-white hover:font-semibold rounded-lg ease-in-out duration-300'><Link href={'/'}>Plus Ultra</Link></li>
            </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-5 mt-5">
        <ul className='flex text-2xl gap-10 text-white'>
            <li className='hover:text-cyan-800 duration-500 ease-in-out'><Link href='https://www.instagram.com/mirza_zain43/' target='_blank' rel='noreferrer'><i className="ri-instagram-fill"></i></Link></li>
            <li className='hover:text-cyan-800 duration-500 ease-in-out'><Link href='https://www.linkedin.com/in/mirza-zain269/' target='_blank' rel='noreferrer'><i className="ri-linkedin-fill"></i></Link></li>
            <li className='hover:text-cyan-800 duration-500 ease-in-out'><Link href='https://github.com/mirza-zain' target='_blank' rel='noreferrer'><i className="ri-github-fill"></i></Link></li>
        </ul>
      </div>
    </footer>
  )
}
