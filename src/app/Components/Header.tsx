"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 md:top-[3.4rem] xl:top-[4rem] backdrop-blur z-10">
      <div className="max-w-[1177px] w-full mx-auto md:px-[20px]">
        <div className="flex justify-between items-center xs:p-3 xl:px-0 md:h-16">
          {/* Logo */}

<div className='flex gap-[80px]'>



<div className="flex-shrink-0">
            <Link href="/" className="xs:text-[25px] md:text-[20px] xl:text-[34px] font-bold leading-[34px]">
            Hekto
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/Pages" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
            Pages
            </Link>
            <Link href="/Products" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
            Product
            </Link>

            <Link href="/Blogs" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
          Blog
            </Link>

            <Link href="/contact" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
           Shop
            </Link>

            <Link href="/contact" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
           Contact
            </Link>

          </div>




</div>

        
{/* search bar */}

<div className="xs:hidden md:flex md:max-w-[200px] xl:max-w-[317px] w-full md:h-[30px] xl:h-[40px] bg-red-500 items-center border border-gray-300  focus-within:bg-red-600 transition-colors duration-300">
  <input
    type="text"
    placeholder="Search..."
    className="w-full h-full px-3 xl:pl-2 text-sm border-none bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
  />
  <div className="flex items-center justify-center cursor-pointer">
    <CiSearch className="text-white md:text-[36px] xl:text-[51px] p-2" />
  </div>
</div>







          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-5 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>


      

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col pl-4 gap-4 px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href="/" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/Pages" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
            Pages
            </Link>
            <Link href="/Products" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
            Product
            </Link>

            <Link href="/Blogs" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
          Blog
            </Link>

            <Link href="/contact" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
           Shop
            </Link>

            <Link href="/contact" className="md:text-[11px] xl:text-[16px] text-gray-600 hover:text-gray-900">
           Contact
            </Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
