import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer1: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-auto flex flex-col items-start justify-start pt-12 px-4 md:px-[100px] pb-[38px] box-border relative text-left text-base md:text-lg text-black font-poppins ${className}`}
    >
      {/* Footer container background and border */}
      <div className="h-full w-full absolute top-0 right-0 bottom-[-0.5px] left-0 bg-white border-t border-gray-200 z-0" />

      <div className="h-auto w-full flex flex-col items-start justify-start gap-12 z-10">
        {/* Main content - Two large columns */}
        <div className="w-full h-auto flex flex-col md:flex-row items-start justify-start gap-12">
          
          {/* Company Information */}
          <div className="h-auto w-full md:w-[287px] flex flex-col items-start justify-start gap-4 md:gap-6">
            <h3 className="text-xl font-bold">Funiro.</h3>
            <div className="text-base text-gray-500">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="h-auto w-full md:w-[352px] flex flex-col md:flex-row items-start justify-start gap-8 text-gray-600">
            <div className="flex flex-col gap-4">
              <div className="font-medium">Links</div>
              <nav className="flex flex-col gap-4">
                <a href="#" className="hover:text-gray-700">Home</a>
                <a href="#" className="hover:text-gray-700">Shop</a>
                <a href="#" className="hover:text-gray-700">About</a>
                <a href="#" className="hover:text-gray-700">Contact</a>
              </nav>
            </div>

            {/* Help Section */}
            <div className="flex flex-col gap-4">
              <div className="font-medium">Help</div>
              <nav className="flex flex-col gap-4">
                <a href="#" className="hover:text-gray-700">Payment Options</a>
                <a href="#" className="hover:text-gray-700">Returns</a>
                <a href="#" className="hover:text-gray-700">Privacy Policies</a>
              </nav>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="h-auto w-full md:w-[286px] flex flex-col gap-6">
            <div className="font-medium">Newsletter</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-black py-1 text-sm focus:outline-none"
              />
              <button className="py-1 px-4 border-b border-black font-medium text-sm">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Bottom Section with copyright */}
        <div className="w-full h-auto flex flex-col items-start justify-start gap-4 mt-8 text-sm border-t border-gray-300 pt-6">
          <div className="w-full border-t border-gray-200" />
          <div className="text-center text-gray-500">
            2023 Funiro. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
