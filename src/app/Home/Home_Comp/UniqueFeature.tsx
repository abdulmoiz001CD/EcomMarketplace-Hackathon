import React from 'react';
import Image from 'next/image';
import Button from '@/app/Home/Home_Comp/Button'

const UniqueFeature = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xs:bg-white md:bg-[#F1F0FF]">
      <div className="flex flex-col max-w-[1177px] mx-auto md:flex-row md:justify-between gap-9 md:gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Image div */}
        <div className="w-full md:w-1/2 lg:w-[509px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
            <Image
              src="./images/sofa.svg"
              alt="Hero Image"
              fill
              className="object-center rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Content div */}
        <div className="w-full md:w-1/2 pt-14 lg:w-[509px] space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight">
            Unique Features Of leatest &
            Trending Poducts
          </h1>
          
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

          <div className="flex gap-4 sm:gap-9 pt-4 items-center">
            <Button text='Add To Cart' />
            <div className='flex flex-col'>
              <div className='text-xs sm:text-sm'>B&B Italian Sofa </div>
              <div className='text-xs sm:text-sm font-medium'>$32.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
