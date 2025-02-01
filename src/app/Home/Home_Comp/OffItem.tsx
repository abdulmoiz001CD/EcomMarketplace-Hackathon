import React from 'react'
import LatestProductCard from '@/app/Home/Home_Comp/LatestProducts/LatestProductCard'
import Button1 from '@/app/Home/Home_Comp/UniqueFeatures/Button'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
interface products{
    image: string;
    title: string;
    description: string;
     price:string;
  }



const OffItem = () => {
  return (
    <section className="max-w-[1177] w-full flex flex-col gap-5 text-[#151875] mx-auto px-4 md:px-0 pt-[70px]">
    {/* Heading */}
    <h2 className="text-[32px] sm:text-[42px] text-[#151875] font-bold text-center">Leatest Products</h2>


   {/* Menu. */}
   <div className="flex items-center gap-8 justify-center">
      <div className="text-600 text-[12px] sm:text-[18px]">Wood Chair</div>
      <div className="text-600 text-[12px] sm:text-[18px]">Plastic Chair</div>
      <div className="text-600 text-[12px] sm:text-[18px]">Sofa Colletion</div>
    </div>


{/* HeroSection */}

    <div className="w-full mx-auto px-4 md:pl-14 lg:pl-20 xl:pl-4 lg:px-0 sm:py-12">
      <div className="flex flex-col max-w-[1177px] mx-auto md:flex-row-reverse md:justify-between gap-9 md:gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Image div */}
        <div className="w-full md:w-1/2 lg:w-[509px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
            <Image
              src="./images/sofa2.svg"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Content div */}
        <div className="w-full md:w-1/2 pt-14 lg:w-[509px] space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight">
          20% Discount Of All Products
          </h1>
          <Button className='text-[#FB2E86] text-[16px] shadow-none border-none bg-[#FFF6FB]'>Eams Sofa Compact</Button>
          <div className="space-y-3 sm:space-y-4">
            <p className="flex items-baseline text-sm sm:text-base gap-2">
           
              <span className="w-[7px] h-[5px]  bg-[#F52B70] rounded-full "></span>
              All frames constructed with hardwood solids and laminates
            </p>
            <p className="flex items-baseline text-sm sm:text-base gap-2">
            
              <span className="w-[10px] h-[5px] bg-[#2B2BF5] rounded-full "></span>
              Reinforced with double wood dowels, glue, screw - nails corner 
              blocks and machine nails
            </p>
            <p className="flex items-baseline text-sm sm:text-base gap-2">
              <span className="w-[6px] h-[6px] bg-[#2BF5CC] rounded-full"></span>
              Arms, backs and seats are structurally reinforced
            </p>
          </div>

          <div className="pt-4 ">
            <Button1 text='Add To Cart' />
           
          </div>
        </div>
      </div>
    </div>





 
  </section>
  )
}

export default OffItem;