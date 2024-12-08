import Image from 'next/image'

export default function BeautifulRoom() {
  return (
    <section className="relative flex flex-col lg:flex-row gap-8 lg:gap-[34px] justify-between items-center py-[44px] px-4 lg:px-0">
      
      {/* Background Div */}
      <div className="absolute -z-10 left-0 top-0 w-full lg:w-[1170px] h-[670px] bg-[#FCF8F3]"></div>

      {/* Left Text Section */}
      <div className="flex flex-col gap-4 w-full max-w-[343px] ml-0 lg:ml-[81px] text-center lg:text-left">
        <h1 className="text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-sm lg:text-base">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="px-6 py-3 bg-[#B88E2F] text-white font-bold hover:bg-[#a37728] transition">
          Explore More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-[20px]">
        
        {/* Image 1 */}
        <div className="relative w-[250px] lg:w-[328px] h-[400px] lg:h-[582px] bg-yellow-400">
          <Image 
            src="/room1.png" 
            alt="room1" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-[220px] lg:w-[302px] h-[350px] lg:h-[486px] bg-red-300">
          <Image 
            src="/room2.png" 
            alt="room2" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-[220px] lg:w-[302px] h-[350px] lg:h-[486px] bg-blue-300">
          <Image 
            src="/room1.png" 
            alt="room3" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
