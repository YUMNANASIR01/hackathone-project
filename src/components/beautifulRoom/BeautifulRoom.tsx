import Image from 'next/image'

export default function BeautifulRoom() {
  
  return (
    <section className="relative overflow-x-hidden-hidden flex gap-[34px] justify-between items-center py-[44px]">
      {/* background div */}
      <div className='absolute -z-10 left-0 top-0 w-[1170px] h-[670px] bg-[#FCF8F3]'></div>

      {/* left text */}
      <div className="flex flex-col gap-4 w-[343px] ml-[81px]">
        <h1 className="text-[40px] leading-[48px] font-bold">50+ Beautiful rooms 
        inspiration</h1>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="px-[30px] py-[12px] bg-[#B88E2F] text-white font-bold">Explore More</button>
      </div>

      {/* right div */}
      <div className="flex gap-[20] ">

        {/* 1 */}
        <div className=" relative w-[328px] h-[582px]">
          <Image src="/room1.png" alt="room1" layout='fill' objectFit="cover"></Image>
        </div>

        {/* 2 */}
        <div className=" relative w-[302px] h-[486px]">
          <Image src="/room2.png" alt="room1" layout='fill' objectFit="cover"></Image>
        </div>
        
        {/* 3 */}
        <div className=" relative w-[302px] h-[486px]">
          <Image src="/room1.png" alt="room1" layout='fill' objectFit="cover"></Image>
        </div>

      </div>
    </section>
  )
}
