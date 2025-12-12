

export default function Banner() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse items-center p-3 mt-12 bg-[#0f1516]">
      <div className="md:w-1/2 w-full px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-orange-500">CLASS-IA</h1>
        <p className="text-lg text-justify md:w-[85%] text-white">
          Discover the incredible students of Class 1-A from U.A. High School.
          Each hero-in-training possesses a unique Quirk and exceptional determination.
          Explore their individual profiles, abilities, and the bonds they share.
          Join us as we celebrate the heroes of tomorrow.
        </p>
      </div>
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <img src="/class.jpg" className="w-full h-auto object-cover rounded-lg" alt="Class 1-A" />
      </div>
    </div>
  )
}
