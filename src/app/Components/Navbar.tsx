"use client"
import { FaRegEnvelope } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/Shop/Redux/Store';


const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log('Cart Items:', cartItems); // Debug log
  return (
    <nav className="bg-[#7E33E0] text-white shadow-lg xs:hidden md:block md:px-[17px] sticky top-0 backdrop-blur z-10">
      <div className="max-w-[1177px] w-full mx-auto sm:px-[20px]">
        <div className="flex justify-between items-center md:h-[55px] xl:h-16">
       
          <div className="flex-shrink-0 flex md:gap-5 xl:gap-9 ">
          
          <div className='flex gap-3 items-center'>
          <FaRegEnvelope />
          <div className='md:text-[12px] xl:text-[16px] font-[600]'>mhhasanul@gmail.com</div>
          </div>




          <div className='flex gap-3 items-center'>
          <LuPhoneCall />
          <div className='md:text-[12px] xl:text-[16px] font-[600]'>(12345)67890</div>
          </div>

         
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:space-x-4 xl:space-x-6">
        
           <div className='flex items-center'>
            <div className='md:text-[10px] xl:text-[16px] font-[600]'>English</div>
            <MdOutlineKeyboardArrowDown className='md:text-[18px] xl:text-[26px] mb-[1px] '/>
           </div>


           <div className='flex  items-center'>
            <div className='md:text-[10px] xl:text-[16px] font-[600]'>USD</div>
            <MdOutlineKeyboardArrowDown className='md:text-[18px] xl:text-[26px]  mb-[1px]'/>
           </div>



           <div className='flex  items-center gap-1'>
            <div className='md:text-[10px] xl:text-[16px] font-[600]'>Login</div>
            <FiUser className='md:text-[12px] xl:text-[18px] mb-[3px]'/>
           </div>



           <div className='flex items-center gap-1'>
            <div className='md:text-[10px] xl:text-[16px] font-[600]'>Wishlist</div>
            <FaRegHeart className='md:text-[12px] xl:text-[18px]  mb-[3px]'/>
           </div>

           {/* <Link href="/CartPage">
           <FiShoppingCart className="md:text-[12px] xl:text-[18px] mb-[3px] cursor-pointer" />
            </Link> */}
           
            <div className="relative">
                <Link href="/Shop" className="relative inline-block">
                <FiShoppingCart className="md:text-[12px] xl:text-[18px] mb-[3px] cursor-pointer" />
                    <span className="absolute top-[-8px] right-[-12px] bg-[#f54545] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                        {cartItems?.length || 0}
                    </span>
                </Link>
            </div>
        
          </div>

        
        </div>
      </div>

      
    
    </nav>
  );
};

export default Navbar;
