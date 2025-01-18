import React from 'react'
import HeroSection from '@/app/Home/Home_Comp/Hero'
import FeaturedProducts from '@/app/Home/Home_Comp/Featured/Feautured'
import LatestProduct from '@/app/Home/Home_Comp/LatestProducts/LatestProduct'
import Shopex from '@/app/Home/Home_Comp/ShopexOffer/Shopex'
import UniqueFeature from '@/app/Home/Home_Comp/UniqueFeature'
import Trending from '@/app/Home/Home_Comp/Trend_Product/Trending'
import Discount from '@/app/Home/Home_Comp/DiscountSec/Discount'
import OffItem from '@/app/Home/Home_Comp/OffItem'
import TopCatorgry from '@/app/Home/Home_Comp/TopCatorgry'
import Update from '@/app/Home/Home_Comp/Update'
import Blog from '@/app/Components/Blog'

const page = () => {
  return (
 <>
    <HeroSection/>
     <FeaturedProducts/>
     <LatestProduct/>
     <Shopex/>
     <UniqueFeature/>
     <Trending/>
     <Discount/>
     <OffItem/>
     <TopCatorgry/>
     <Update/>
     <Blog/>
     
    </>
  )
}

export default page