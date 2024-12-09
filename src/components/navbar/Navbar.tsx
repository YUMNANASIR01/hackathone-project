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
      <div className="max-w-[1286px] mx-auto px-4 flex items-center justify-between h-[41px] mt-[29px] ml-[54px] sm:mt-6 sm:ml-4">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <div className="w-[50px] h-[32px]">
            <div className="w-full h-full" />
          </div>
          <h1 className="text-[34px] font-bold font-montserrat text-black flex items-center gap-4">
            <div className="mt-4 sm:mt-10">
              <Image src={'/logo.png'} alt={'Logo'} height={32} width={50} />
            </div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex items-center gap-6">
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
      <div className="sm:hidden flex items-center justify-between px-4 py-2 mt-10"> 
        <button
          aria-label="Menu"
          className="p-2"
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

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 mr-10 ">
          {/* Close Button inside Mobile Menu */}
          <button
            aria-label="Close Menu"
            className="self-end text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            × 
          </button>
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

