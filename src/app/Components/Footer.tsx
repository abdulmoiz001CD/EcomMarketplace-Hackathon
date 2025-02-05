import React from 'react'
import { CiSearch } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="pt-[180px] bg-[#EEEFFB]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1255px] mx-auto"> 
          <div className="grid grid-cols-2 md:grid-cols-12 items-center gap-16">
            {/* First Section - Hekto */}
            <div className="col-span-2 md:col-span-3 mb-[70px]">
              <h5 className="font-semibold text-[38px] mb-6">Hekto</h5>
              <ul className="flex flex-col space-y-4">
               
{/* search bar */}
{/* 
<div className="flex xs:max-w-[317px] md:max-w-[200px] xl:max-w-[317px] w-full xs:h-[40px] md:h-[30px] xl:h-[40px] bg-red-500 items-center border border-gray-300  focus-within:bg-red-600 transition-colors duration-300">
  <input
    type="text"
    placeholder="Search..."
    className="w-full h-full px-3 xl:pl-2 text-sm border-none bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
  />
  <div className="flex items-center justify-center cursor-pointer">
    <CiSearch className="text-white xs:text-[45px] md:text-[36px] xl:text-[51px] p-2" />
  </div>
</div> */}

<div className="flex w-full max-w-[317px] md:max-w-[200px] xl:max-w-[317px] h-[40px] md:h-[30px] xl:h-[40px] bg-[#dde0ff] items-center border border-gray-300 rounded-lg focus-within:bg-[#758bb2] transition-colors duration-300">
  <input
    type="text"
    placeholder="Search..."
    className="w-full h-full px-3 xl:pl-2 text-sm border-none bg-transparent text-white placeholder-gray-200 focus:outline-none"
  />
  <div className="h-full aspect-square flex items-center justify-center cursor-pointer p-2 md:p-1.5 xl:p-2">
    <CiSearch className="text-[#252222] text-[24px] md:text-[20px] xl:text-[24px]" />
  </div>
</div>



                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>

            {/* Second Section - Categories */}
            <div className="col-span-2 md:col-span-3">
              <h5 className="font-semibold text-xl mb-6">Catagories</h5>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              </ul>
            </div>

            {/* Third Section - Customer Care */}
            <div className="col-span-2 md:col-span-3">
              <h5 className="font-semibold text-[18px] lg:text-xl mb-6">Customer Care</h5>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              </ul>
            </div>

            {/* Fourth Section - Pages */}
            <div className="col-span-2 md:col-span-3">
              <h5 className="font-semibold text-xl mb-6">Pages</h5>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between py-8 mt-8 border-t border-gray-200">
            <p className="text-gray-600">©Webecy - All Rights Reserved.</p>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#twitter"></use></svg></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#instagram"></use></svg></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900"><svg className="w-6 h-6"><use href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
