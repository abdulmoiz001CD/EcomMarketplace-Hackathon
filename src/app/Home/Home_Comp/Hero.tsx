import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative  w-full h-[35vh]  md:h-[65vh] lg:h-[80vh] 2xl:h-[764px] mx-auto">
      <img
        src="./images/promotional.svg"
        alt="Hero Image"
        // fill
        // priority
        className="object-cover"
      />
    </section>
  );
};

export default HeroSection;

