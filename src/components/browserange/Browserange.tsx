import React from 'react';
import Image from 'next/image';
import { browseRange } from '@/constant/browseRange';

function Browserange() {
  return (
    <section className="px-4 md:px-10 lg:px-[131px] mx-auto mb-20 font-poppins max-w-screen-xl">
      
      {/* Top Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-[36px] md:leading-[42px] lg:leading-[48px] font-bold text-black">
          Browse The Range
        </h1>
        <p className="text-16 md:text-lg lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[30px] text-black mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Body Section */}
      <div className="mt-10 grid grid-cols-1   lg:grid-cols-3 gap-6 w-full">
        {browseRange.map((item, index) => (
          <div className="flex flex-col items-center " key={index}>
            
            {/* Top Image Container */}
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] lg:h-[480px] relative">
              <Image
                src={item.src}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Card Text Section */}
            <div className="mt-4">
              <h2 className="xsm:text-3xl text-4xl md:text-xl lg:text-[24px] 
              leading-[28px] md:leading-[32px] lg:leading-[36px] 
              font-semibold 
              text-[24px]
               text-black 
               text-center">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Browserange;
