import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';

interface CardType{
    image:string;
    title:string,
    alt:string,
    btnText:string,
}




const CardOne : React.FC<CardType> = ({title, btnText, image,alt}) => {
    return (
        <>


            <div className="max-w-[420px] h-[270px] w-full mb-8 sm:mb-12 flex flex-col items-baseline pl-6 pt-14 bg-[#FFF6FB]">

                <h2 className="text-[26px] font-[600px] pl-3">{title}</h2>


                <div className='flex justify-between gap-14 w-full'>
                    <Button className='text-[#FB2E86] text-[16px] shadow-none border-none bg-[#FFF6FB]'>{btnText}</Button>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 sm4:pl-[3rem] pl-0 ">
                        <Image
                            src={image}
                            alt={alt}
                            width={213}
                            height={207}
                            className="max-w-[8rem] w-full  object-cover rounded-lg"
                        />
                    </div>
                  

                </div>


            </div>


        </>
    )
}

export default CardOne