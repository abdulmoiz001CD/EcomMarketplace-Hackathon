import React from 'react'
import LatestProductCard from '@/app/Home/Home_Comp/LatestProducts/LatestProductCard'



interface products {
  id: string;
  image: string;
  title: string;
  price: string;
}

const latestProductsData: products[] = [
  {
    id: "1",
    image: "./images/lchair1.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "2",
    image: "./images/lchair2.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "3",
    image: "./images/chair4.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "4",
    image: "./images/lchair4.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "5",
    image: "./images/lchair5.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "6",
    image: "./images/chair2.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
];


const LatestProduct = () => {
  return (
    <section className="max-w-[1177] flex flex-col gap-2 mx-auto px-4 pt-[70px]">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[42px] font-bold text-center">Leatest Products</h2>


      {/* Menu. */}
      <div className="flex items-center gap-8 justify-center">
        <div className="text-600 text-[12px] sm:text-[18px]">New Arrival</div>
        <div className="text-600 text-[12px] sm:text-[18px]">Best Seller</div>
        <div className="text-600 text-[12px] sm:text-[18px]">Featured</div>
        <div className="text-600 text-[12px] sm:text-[18px]">Special Offer</div>
      </div>


      {/* Products Grid */}

      <div className="lg:max-w-[1177px] w-full mx-auto py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center gap-y-[90px]">
          {latestProductsData.map((value) => {
            return (
              <LatestProductCard key={value.id} {...value} />
            )
          })}

        </div>
      </div>







    </section>
  )
}

export default LatestProduct