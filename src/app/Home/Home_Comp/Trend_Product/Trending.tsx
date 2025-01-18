import TrendingCard from '@/app/Home/Home_Comp/Trend_Product/TrendingCard'


interface products {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: string;
}

const trendingCardsData: products[] = [
  {
    id: "1",
    image: "./images/trend1.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "2",
    image: "./images/trend2.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "3",
    image: "./images/trend3.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
  {
    id: "4", // Corrected key to be unique
    image: "./images/trend4.svg",
    title: "Cantilever chair",
    price: "$42.00",
  },
];



const Trending = () => {
  return (
    <section className="max-w-[1177] flex flex-col gap-2 mx-auto px-4 pt-[70px]">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[42px] font-bold text-center">Trending Products</h2>
      
      {/* Products Grid */}
      <div className="lg:max-w-[1177px] w-full mx-auto py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-9 justify-items-center gap-y-[90px]">
          {trendingCardsData.map((card) => (
            <TrendingCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending;