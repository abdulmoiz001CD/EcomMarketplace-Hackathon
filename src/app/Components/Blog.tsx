import React from 'react';
import Image from 'next/image';
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Blog = () => {
    const cards = [
        {
            image: "/images/blog1.svg",
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly"
        },
        {
            image: "/images/blog2.svg",
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly"
        },
        {
            image: "/images/blog3.svg",
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly"
        }
    ];

    return (
        <section className="max-w-[1177px] w-full mx-auto px-4 pt-[130px] mb-[130px]">

            <h2 className="text-[32px] sm:text-[42px] font-bold text-center mb-[48px]">
                Latest Blog
            </h2>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col  max-w-[370px] ml-4 md:ml-2 xl:ml-0 w-full h-[493px] bg-[#F6F7FB] rounded-lg shadow-lg border border-white overflow-hidden">
                        <div className="w-full">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Changed from items-center to items-start */}
                        <div className="flex flex-col p-4 space-y-3 ">

                            <div className="flex gap-5">

                                <div className="flex gap-1 items-center">
                                    <FaPenNib className="text-[#FB2E86] text-[11px]" />
                                    <div className="max-w-[160px] w-full text-center rounded-[5px]  text-sm px-2 py-1">Surf Auxion</div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <FaRegCalendarAlt className="text-[#FFA454] text-[11px]" />
                                    <div className="max-w-[160px] w-full text-center rounded-[5px]  text-sm px-2 py-1">Aug 09 2020</div>
                                </div>

                            </div>


                            <h3 className="font-bold text-lg">{card.title}</h3>
                            <p className="text-[16px] leading-[30px] text-gray-400">{card.description}</p>
                            {/* Added hover effect and removed border */}
                            <div className='bg-transparent hover:bg-gray-100 items-start text-[#000] outline-none shadow-none'>
                                Read More
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    );
};

export default Blog;
