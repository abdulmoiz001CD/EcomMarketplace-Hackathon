import React from 'react'
import LatestProductCard from '@/app/Home/Home_Comp/LatestProducts/LatestProductCard'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


interface products {
  id: string;
  image: string;
  title: string;
  price: string;
}




 async function getLatestProduct(){
    const query = `*[_type == "product" &&  "home_LatestProductsChairs" in tags]{
    _id,
    name,
    image {
    asset->{
     url
     } 
    },
    price,
    description,
    stockLevel,
   
    }`
    
    return await client.fetch(query);


 } 

const LatestProduct = async() => {

    const latestProductsData = await getLatestProduct()
  
   

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
          {latestProductsData?.map((cardData:any) => {
            return (
              <Link href={`/ProductDetail/${cardData._id}`}>
              <LatestProductCard  key={cardData._id}
              name={cardData.name}
              image={cardData.image?.asset?.url || ''}
              price={cardData.price.toString()}
              id={cardData._id}
              description={cardData.description}
              stockLevel={cardData.stockLevel}
              />
              </Link>
            )
          })}

        </div>
      </div>







    </section>
  )
}

export default LatestProduct