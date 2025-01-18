import React from 'react';
import Image from 'next/image';
import CardOne from './CardOne';
import CardTwo from  './CardTwo'

interface CardType{
  image:string;
  title:string,
  alt:string,
  btnText:string,
  id:string
}

const cardsDataOne:CardType[] = [
  {
  id:'2',
  image: "/images/off1.svg",
  title: "Bestseller Products",
  alt: 'Offer Image',
  btnText:"Shop Now",
  },
];



const cardsDataTwo:CardType[] = [
  {
    id:'1',
  image: "/images/off2.svg",
  title: "20% Off On Latest Products",
  btnText:'Shop Now',
  alt: 'Offer Image'
  }
];

const Discount = () => {
 
  return (
    <section className="flex flex-col xl:flex-row items-center gap-9 xl:gap-3 justify-between max-w-[1177px] mx-auto py-8 sm:py-12">



    <div className='flex flex-col md:flex-row gap-[4rem]'>
        
{cardsDataOne.map((value)=>{
      return(
       <CardOne key={value.id} image={value.image} title={value.title}  alt ={value.alt} btnText={value.btnText}/>
      )
     })}



{cardsDataTwo.map((value)=>{
      return(
       <CardTwo key={value.id} image={value.image} title={value.title}  alt ={value.alt} btnText={value.btnText}/>
      )
     })}

    </div>






      {/* Third Division - Cards */}
    <div className='xl:max-w-[267px] px-[3rem] xl:px-0 w-full flex flex-col sm:flex-row xl:flex-col gap-4 sm:gap-6 xl:gap-8 justify-between items-center min-h-[270px] xl:pb-9'>
    {/* Card 1 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard1.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px]  md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>

    {/* Card 2 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard2.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px]  md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>

    {/* Card 3 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard3.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px] md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>
</div>



    
    </section>
  );
};

export default Discount;
