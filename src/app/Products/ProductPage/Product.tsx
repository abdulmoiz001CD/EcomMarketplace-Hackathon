import React from 'react'
import Card from '@/app/Products/ProductPage/Card'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

export interface Product {
  _id: string
  name: string
  image: {
    asset: {
      url: string
    }
  }
  price: string
  description: string
  stockLevel: number
  tags?: string[]
  discountPercentage: number
}

const FashionItems = async () => {
  const query = `*[_type == "product" && "home_LatestProductsChairs" in tags]{
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
    discountPercentage
  }`

  const data: Product[] = await client.fetch(query)

  return (
    <>
      <section className="container mx-auto px-4 pt-32 pb-12">
        {/* Heading Section */}
        <div className="flex flex-col gap-6 items-center xl:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ecommerce Accessories & Fashion Items
            </h2>
            <p className="text-sm text-center xl:text-start text-gray-500 mt-2">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Per Page */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="perPage" className="text-gray-600 text-sm whitespace-nowrap">
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                className="w-full sm:w-[55px] h-8 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="sortBy" className="text-gray-600 text-sm whitespace-nowrap">
                Sort By:
              </label>
              <input
                id="sortBy"
                type="text"
                className="w-full sm:w-[96px] h-8 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* View */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="view" className="text-gray-600 text-sm whitespace-nowrap">
                View:
              </label>
              <input
                id="view"
                type="text"
                className="w-full sm:w-[162px] h-8 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((value) => (
              <Link href={`/ProductDetail/${value._id}`} key={value._id}>
                {/* You can wrap Card in an anchor if needed */}
                <Card
                  id={value._id}
                  description={value.description}
                  stockLevel={value.stockLevel}
                  image={value.image?.asset?.url || ""}
                  title={value.name}
                  price={value.price}
                  discount={value.discountPercentage}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Image */}
      <div className="my-12">
        <Image
          src="/images/Mestonix.svg"
          alt="Mestonix"
          width={904}
          height={93}
          className="mx-auto"
        />
      </div>
    </>
  )
}

export default FashionItems
