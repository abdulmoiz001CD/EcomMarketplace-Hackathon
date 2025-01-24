import TrendingCard from '@/app/Home/Home_Comp/Trend_Product/TrendingCard'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface products {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: string;
}



const getTrendingProduct = async() => {
  const  query = `*[_type == "product" && "home_TrendingProducts" in tags]{
  
   _id,
    name,
    image {
    asset-> {
    url
   }
   },
    price,
    stockLevel,
    description,
  }`

   return await client.fetch(query)
}



const Trending = async() => {

   const getLatestProductEl = await getTrendingProduct();
  return (
    <section className="max-w-[1177] flex flex-col gap-2 mx-auto px-4 pt-[70px]">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[42px] font-bold text-center">Trending Products</h2>
      
      {/* Products Grid */}
      <div className="lg:max-w-[1177px] w-full mx-auto py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-9 justify-items-center gap-y-[90px]">
          {getLatestProductEl.map((cardData:any) => (
              <Link href={`/ProductDetail/${cardData._id}`}  key={cardData._id}>
            <TrendingCard
            id={cardData._id}
            title={cardData.name}
            image={cardData.image?.asset?.url || ""}
            price={cardData.price.toString()}
            stockLevel={cardData.stockLevel}
            description={cardData.description} /></Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending;