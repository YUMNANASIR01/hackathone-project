"use client";

import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

// Type definition for the component's props
export type HeaderType = {
  className?: string; // Optional className prop for custom styling
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  // Function to handle clicks on the group container
  const onGroupContainerClick = useCallback(() => {
    // Placeholder for syncing "Cart Sidebar" to the project
  }, []);

  return (
    // Main header container
    <header
      className={`w-full h-[100px] flex flex-row items-center justify-between pt-[29px] px-[54px] pb-[30px] box-border relative text-left text-15xl text-black font-montserrat ${className}`}
    >
      {/* Background section */}
      <div className="h-full w-full absolute m-0 top-0 right-0 bottom-0 left-0 bg-white z-[0]" />
      
      {/* Main content container */}
      <div className="flex w-full items-end justify-between z-[1]">
        {/* Logo and navigation container */}
        <div
          className="flex items-center justify-between w-full max-w-[1286px] cursor-pointer z-[2]"
          onClick={onGroupContainerClick}
        >
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-start">
              <Image
                className="w-[50px] h-[32px] object-cover"
                loading="lazy"
                width={50}
                height={32}
                alt="Furniro logo"
                src="/meubel-house-logos05@2x.png"
              />
            </div>
            <a className="text-black font-bold text-xl">Furniro</a>
          </div>

          {/* Icon section */}
          <div className="flex items-center gap-4">
            <Image
              className="h-7 w-7 object-contain"
              loading="lazy"
              width={28}
              height={28}
              alt="Account icon"
              src="/mdiaccountalertoutline.svg"
            />
            <Image
              className="h-7 w-7 object-contain"
              loading="lazy"
              width={28}
              height={28}
              alt="Search icon"
              src="/akariconssearch.svg"
            />
            <Image
              className="h-7 w-7 object-contain"
              loading="lazy"
              width={28}
              height={28}
              alt="Heart icon"
              src="/akariconsheart.svg"
            />
            <Image
              className="h-7 w-7 object-contain"
              loading="lazy"
              width={28}
              height={28}
              alt="Cart icon"
              src="/antdesignshoppingcartoutlined.svg"
            />
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="flex items-center ml-auto text-black font-poppins">
          <nav className="flex items-center gap-8 text-base">
            <a className="font-medium">Home</a>
            <a className="font-medium">Shop</a>
            <a className="font-medium">Blog</a>
            <a className="font-medium">Contact</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
