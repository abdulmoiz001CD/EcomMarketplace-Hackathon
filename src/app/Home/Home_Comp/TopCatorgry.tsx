import TopCard from '@/app/Home/Home_Comp/TopCard'
interface products{
    image: string;
    title: string;
    description: string;
     price:string;
  }



const TopCatorgry = () => {
  return (
    <section className="max-w-[1177] flex flex-col gap-2 mx-auto px-4 lg:px-0 pt-[90px]">
    {/* Heading */}
    <h2 className="text-[32px] sm:text-[42px] font-bold text-center">Top Categories</h2>


  

    {/* Products Grid */}

    <div className="lg:max-w-[1177px] w-full mx-auto py-14 md:py-0">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-9 justify-items-center gap-y-[90px]">
    <TopCard
      key="1"
      image="./images/top1.svg"
      title="Cantilever chair"
      price="$42.00"
    />
    <TopCard
      key="2"
      image="./images/top2.svg"
      title="Cantilever chair"
      price="$42.00"
    />
    <TopCard
      key="3"
      image="./images/top3.svg"
      title="Cantilever chair"
      price="$42.00"
    />
      <TopCard
      key="3"
      image="./images/top4.svg"
      title="Cantilever chair"
      price="$42.00"
    />

  </div>
</div>






 
  </section>
  )
}

export default TopCatorgry;