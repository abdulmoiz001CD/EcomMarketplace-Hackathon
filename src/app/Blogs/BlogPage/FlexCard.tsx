import React from 'react'
import Image from 'next/image'

interface card {
    title: string,
    para: string,
    img: string
}

const FlexCard: React.FC<card> = ({title, para, img}) => {
  return (
    <div className="flex items-center gap-2 w-full h-[74px] relative">
        <div className='relative w-[70px] h-[51px] bg-[#F7F7F7]'>
            <Image 
                src={img}
                alt={title}
                fill
                className="object-cover"
                sizes="70px"
            />
        </div>
        <div className="flex flex-col justify-center flex-1">
            <h3 className="text-[14px] font-semibold ">{title}</h3>
            <p className="text-[11px] md:text-[9px] xl:text-[12px] text-gray-600 ">{para}</p>
        </div>
    </div>
  )
}

export default FlexCard

