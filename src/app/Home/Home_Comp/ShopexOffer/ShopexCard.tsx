import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  heading: string;
  paragraph: string;
}

const Shopex: React.FC<CardProps> = ({ imageUrl, heading, paragraph }) => {
  return (
    <div className="w-[270px] h-[320px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={heading}
          width={100} 
          height={100} 
       
          className="w-full h-auto object-contain" 
        />
      </div>



      <h3 className="text-xl font-semibold mt-4">
        {heading}
      </h3>
      
      <p className="text-gray-600 text-center mt-2">
        {paragraph}
      </p>
    </div>
  );
};

export default Shopex;
