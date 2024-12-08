'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white">
      {/* Main container for Navbar */}
      <div className="max-w-[1286px] mx-auto px-4 flex items-center justify-between h-[41px] mt-[29px] ml-[54px]">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <div className="w-[50px] h-[32px]">
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-full h-full" />
          </div>
          <h1 className="text-[34px] font-bold font-montserrat text-black flex items-center gap-4">
            {/* Logo Image */}
            <div>
              <Image src={'/logo.png'} alt={'Logo'} height={32} width={50} />
            </div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          <button aria-label="Account" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <UserCircle className="w-6 h-6" />
          </button>
          <button aria-label="Search" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button aria-label="Shopping Cart" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile View - Hamburger Menu */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2">
        <button
          aria-label="Menu"
          className="p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl font-bold">×</span>
          ) : (
            <div>
              <div className="w-6 h-1 bg-black mb-1 transition-transform duration-300"></div>
              <div className="w-6 h-1 bg-black mb-1 transition-transform duration-300"></div>
              <div className="w-6 h-1 bg-black transition-transform duration-300"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-3/4`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          <button
            aria-label="Close Menu"
            className="self-end text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
