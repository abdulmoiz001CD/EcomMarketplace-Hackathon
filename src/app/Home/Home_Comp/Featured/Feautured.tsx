// const FeaturedProducts = ({ featureProducts }: { featureProducts: Product[] }) => {
//   return (
//     <section className="max-w-[1177px] flex flex-col gap-9 mx-auto px-4 2xl:pt-[150px]">
//       {/* Heading */}
//       <h2 className="xs:text-[32px] sm:text-[42px] font-bold text-center mb-8">Featured Products</h2>

//       {/* Products Grid */}
//       <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
//         {featureProducts.map((cardData: Product) => (
//   <FeaturedCard
//     key={cardData._id}
//     id={cardData._id}
//     title={cardData.title}
//     image={cardData.image?.asset?.url || ''} // Handle the image URL
//     price={cardData.price.toString()}
//     description={cardData.description}
//   />
// ))}


//         </div>
//       </div>

//       {/* Divider */}
//       <div className="flex items-center gap-1 justify-center mt-12">
//         <div className="w-8 h-1 bg-gray-300"></div>
//         <div className="w-4 h-1 bg-gray-300"></div>
//         <div className="w-4 h-1 bg-gray-300"></div>
//         <div className="w-6 h-1 bg-gray-300"></div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;




import React from 'react';
import FeaturedCard from '@/app/Home/Home_Comp/Featured/FeaturedCard';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  image?: {
    asset: {
      url: string;
    };
  };
  price: number;
  description: string;
  stockLevel:number|string
  quantity?: number; // This is missing in your object
  name?: string; // This might be another missing property
}

// Separate async function for data fetching
async function getFeaturedProducts() {
  const query = `*[_type == "product" && "home_FeatureProducts" in tags]{
    _id,
    title,
    image {
      asset->{
        url
      }
    },
    price,
    description,
    stockLevel,
  }`;
  
  return await client.fetch(query);
}

// Make the component async
async function FeaturedProducts() {
  // Fetch data directly in the component
  const featureProducts = await getFeaturedProducts();

  return (
    <section className="max-w-[1177px] flex flex-col gap-9 mx-auto px-4 2xl:pt-[150px]">
      {/* Heading */}
      <h2 className="xs:text-[32px] sm:text-[42px] font-bold text-center mb-8">
        Featured Products
      </h2>

      {/* Products Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {featureProducts?.map((cardData: Product) => (
            <Link href={`/ProductDetail/${cardData._id}`} key={cardData._id}>
            <FeaturedCard
              id={cardData._id}
              title={cardData.title}
              image={cardData.image?.asset?.url || ''}
              price={cardData.price.toString()}
              description={cardData.description}
              stockLevel={cardData.stockLevel}
              quantity={cardData.quantity}
              name={cardData.name}
            />
          </Link>
          
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-1 justify-center mt-12">
        <div className="w-8 h-1 bg-gray-300"></div>
        <div className="w-4 h-1 bg-gray-300"></div>
        <div className="w-4 h-1 bg-gray-300"></div>
        <div className="w-6 h-1 bg-gray-300"></div>
      </div>
    </section>
  );
}

export default FeaturedProducts;