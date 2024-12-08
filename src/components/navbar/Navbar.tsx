'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'

export default function Navbar() {
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
            <div><Image src={'/logo.png'} alt={'Logo'} height={32} width={50}></Image></div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          {/* Links for navigation */}
          <Link 
            href="/" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Shop
          </Link>
          <Link 
            href="/blog" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          {/* Account Icon */}
          <button 
            aria-label="Account" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <UserCircle className="w-6 h-6" />
          </button>
          {/* Search Icon */}
          <button 
            aria-label="Search" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
          {/* Wishlist Icon */}
          <button 
            aria-label="Wishlist" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Heart className="w-6 h-6" />
          </button>
          {/* Shopping Cart Icon */}
          <button 
            aria-label="Shopping Cart" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile View - Navbar Links for smaller screens */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2">
        {/* Hamburger Menu or Drawer can be added here for mobile */}
        <button aria-label="Menu" className="p-2">
          {/* Placeholder for hamburger icon */}
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>
      </div>
    </nav>
  )
}
