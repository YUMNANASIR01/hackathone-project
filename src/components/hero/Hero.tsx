import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col mb-[56.67px] ">

      <main className="flex-1 ">
        {/* Hero section with background image */}
        <section
          className="relative h-[600px] bg-cover bg-center "
          style={{ backgroundImage: "url('/heroMain.png')" }}
        >
          <div className="container h-full flex  items-center justify-center sm:justify-end px-4">
            {/* Content container, adjusts on small screens */}
            <div className="
            relative z-10  bg-[#FFF9F3] p-8
            max-w-[210px] left-[100px]
            xsm:max-w-[250px] 
            xsm:left-[100px]
            sm:max-w-[300px]
            xsm:mb-[120px]
            sm:left-0 
            md:max-w-[350px]    
            md:left-0
            lg:left-[-40px]
            lg:max-w-[643px]
            ">
              <p className="text-sm uppercase tracking-wide mb-2 ">New Arrival</p>
              <h1 className="text-xl xsm:text-4xl font-bold text-[#B88E2F] mb-4">
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <Button
                className="bg-[#B88E2F] hover:bg-[#A17B2A] text-white px-8 py-6"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}