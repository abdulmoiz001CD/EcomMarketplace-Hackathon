import React from 'react';
import LatestProductCard from '@/app/Home/Home_Comp/LatestProducts/LatestProductCard';
import  Button1  from "@/app/Home/Home_Comp/UniqueFeatures/Button";
import Image from 'next/image';


interface products{
    image: string;
    title: string;
    description: string;
     price:string;
  }



const Update = () => {
  return (
    <>
    <section className="bg-[url('/images/update.svg')] bg-cover bg-center max-w-[1920px] h-[462px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-40 mb-10 md:mb-15 xs:bg-white md:bg-[#F1F0FF]">
    <div className="max-w-[1177] flex flex-col  items-center gap-2 mx-auto px-4 lg:px-0 pt-[90px]">
    {/* Heading */}
    <h2 className="max-w-[574px] w-full text-[32px] sm:text-[35px] text-[#151875] font-bold text-center">Get Leatest Update By Subscribe
    0ur Newslater</h2>


  
    <div className="pt-4 ">
            <Button1 text='Shop Now' />
           
          </div>
    




   





          </div>
 
  </section>
    <Image src='./images/Mestonix.svg' alt='Mestonix' width={904} height={93} className='mx-auto'/>
    </>
  )
}

export default Update;