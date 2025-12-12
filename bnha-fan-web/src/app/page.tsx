import Banner from "./(Component)/Banner";
import CharacterProfile from "./(Component)/CharacterProfile";
import CharacterSlider from "./(Component)/CharacterSlider";


export default function Home() {
  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col-reverse p-3 mt-12">
        <div className="md:w-1/2 w-full px-4">
          <h1 className="text-4xl font-extrabold mt-10 text-[#0f6567]">Welcome to Academy</h1>
          <p className="text-lg text-justify md:w-[85%] mt-16">
            Welcome to archieve of Heros and Villians from Boku no Hero Academia.
            Here, you'll discover the incredible world of Quirks
            the superpowers that define this extraordinary society. 
            Dive deep into the profiles of your favorite characters, analyze their unique abilities,
            and explore how they harness their Quirks to create an epic world of heroism and villainy.
          </p>
        </div>
        <div className="md:w-1/2 w-full mb-8 place-items-center flex">
          <img src={'/characters/midoriya.webp'}  className="md:w-[30%] w-[35%]" alt="izuku"/>
          <img src={'/characters/bakugo.webp'}  className="md:w-[30%] w-[35%]" alt="izuku"/>
          <img src={'/characters/shoto.webp'}  className="md:w-[25%] w-[30%]" alt="izuku"/>
          {/* <video autoPlay loop muted className='w-full object-cover'>
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>         */}
        </div>
      </div>
      <div>
      </div> 
      <Banner />
      {/* <CharacterProfile /> */}
      <CharacterSlider />
    </>
  );
}
