import React from 'react'
import Card from '@/app/Components/FashionItems/Card'
import Image from 'next/image'
interface products {
  image: string;
  title: string;
  description: string;
  price: string;
}


const FashionItems = () => {
  return (
    <>

      <section className="max-w-[1177px] flex flex-col gap-[76px] mx-auto px-4 pt-[140px]">



        {/* Heading */}


        <div className='flex flex-col items-center gap-5 lg:flex-row w-full lg:justify-between'>
          {/* Heading */}
          <div className='flex flex-col'>
            <h2 className="xs:text-[15px] sm:text-[22px] font-bold text-center">Ecommerce Acceories & Fashion item </h2>
            <p>About 9,620 results (0.62 seconds)</p>
          </div>


         
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
  {/* First child - Number input */}
  <div className="flex items-center gap-2 w-full sm:w-auto">
    <p className="text-gray-600 text-[16px] whitespace-nowrap">Per Pages:</p>
    <input
      type="number"
      className="max-w-[55px] w-full h-[25px] px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second child - Shutter input */}
  <div className="flex items-center gap-2 w-full sm:w-auto">
    <p className="text-gray-600 text-[16px] whitespace-nowrap">Sort By:</p>
    <input
      type="text"
      className="max-w-[96px] w-full h-[25px] px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Third child - Regular input */}
  <div className="flex items-center gap-2 w-full sm:w-auto">
    <p className="text-gray-600 text-[16px] whitespace-nowrap">View:</p>
    <input
      type="text"
      className="max-w-[162px] w-full h-[25px] px-1 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>


        </div>












        {/* Products Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9  gap-y-[80px] justify-items-center">
            <Card
              key="1"
              image="./images/pages1.svg"
              title="Vel elit euismod"

            />
            <Card
              key="2"
              image="./images/pages2.svg"
              title="Vel elit euismod"

            />
            <Card
              key="3"
              image="./images/pages3.svg"
              title="Vel elit euismod"

            />
            <Card
              key="4"
              image="./images/pages4.svg"
              title="Vel elit euismod"

            />


            <Card
              key="4"
              image="./images/pages5.svg"
              title="Vel elit euismod"

            />


            <Card
              key="4"
              image="./images/pages6.svg"
              title="Vel elit euismod"

            />

            <Card
              key="4"
              image="./images/pages7.svg"
              title="Vel elit euismod"

            />


            <Card
              key="4"
              image="./images/pages8.svg"
              title="Vel elit euismod"

            />



            <Card
              key="4"
              image="./images/pages9.svg"
              title="Vel elit euismod"

            />



            <Card
              key="4"
              image="./images/pages10.svg"
              title="Vel elit euismod"

            />



            <Card
              key="4"
              image="./images/pages11.svg"
              title="Vel elit euismod"

            />




            <Card
              key="4"
              image="./images/pages12.svg"
              title="Vel elit euismod"

            />









          </div>
        </div>

        







      </section>
  <Image src='./images/Mestonix.svg' alt='Mestonix' width={904} height={93} className='mx-auto my-[100px]'/>






    </>
  )
}

export default FashionItems