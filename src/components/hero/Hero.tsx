import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col mb-[56.67px]">

      <main className="flex-1">
        {/* Hero section with background image */}
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/heroMain.png')" }}
        >
          <div className="container h-full flex items-center justify-center sm:justify-end px-4">
            {/* Content container, adjusts on small screens */}
            <div className="relative z-10 max-w-[543px] bg-[#FFF9F3] p-8 sm:right-[40px] md:right-[160px]">
              <p className="text-sm uppercase tracking-wide mb-2">New Arrival</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#B88E2F] mb-4">
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
