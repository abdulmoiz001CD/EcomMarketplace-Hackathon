import React from 'react'
import Card from '@/app/Components/BlogPage/Card'
import { CiSearch } from "react-icons/ci";
import FlexCard from './FlexCard';
import Image from 'next/image';

const Blog = () => {
  return (
<>

<div className='max-w-[1177px] w-full text-[#151875] mx-auto flex flex-col lg:flex-row gap-16 justify-between'>

{/* left sideBar */}

<div className='max-w-[870px] w-full flex flex-col  gap-[76px]  px-4 pt-[140px] mb-[40px]'>

<Card image='./images/blogp1.svg' title='Mauris at orci non vulputate diam tincidunt nec.'/>
<Card image='./images/blogp2.svg' title='Aenean vitae in aliquam ultrices lectus. Etiam.'/>
<Card image='./images/blogp3.svg' title='Sit nam congue feugiat nisl, mauris amet nisi. '/>


<ul className="flex gap-2 justify-between max-w-[236px] w-full mx-auto">
  <li className="max-w-[32px] w-full h-[24px] bg-[#FB2CA8] text-white border border-gray-500 flex items-center justify-center">1</li>
  <li className="max-w-[32px]  w-full h-[24px] border border-gray-500 flex items-center justify-center">2</li>
  <li className="max-w-[32px]  w-full h-[24px] border border-gray-500 flex items-center justify-center">3</li>
  <li className="max-w-[32px]  w-full h-[24px] border border-gray-500 flex items-center justify-center">4</li>
</ul>


</div>



{/* Right sideBar */}

<div className='w-full flex flex-col  gap-[20px] pt-[130px] mb-[40px] '>


<div className="text-center md:text-start cursor-pointer  text-[22px] text-[#151875]">
    Search
  </div>

{/* search bar */}

<div className="flex items-center md:items-start md:w-[300px]  lg:max-w-[200px] xl:max-w-[317px] w-full md:h-[30px] xl:h-[40px] rounded-sm   border border-gray-300 transition-colors duration-300">
  <input
    type="text"
    placeholder="Search..."
    className="w-full h-full px-3 xl:pl-2 text-sm border-none  text-black placeholder-gray-400 focus:outline-none"
  />
  <div className="flex items-center justify-center cursor-pointer">
    <CiSearch className="text-[#BDBDD8] text-[35px] p-2 " />
  </div>
</div>




<div className='flex flex-col gap-2'>
<h1 className='cursor-pointer text-start text-[22px] text-[#151875]'>Categories</h1>
<ul className='grid grid-cols-2 gap-4'>
<li className='text-sm bg-[#F939BF] text-white max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Hobbies (14)</li>
<li className='text-sm  text-[#3F509E] max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Women (21)</li>
<li className='text-sm  text-[#3F509E] max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Women (21)</li>
<li className='text-sm  text-[#3F509E] max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Women (21)</li>
<li className='text-sm  text-[#3F509E] max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Women (21)</li>
<li className='text-sm  text-[#3F509E] max-w-[122px] w-full h-[30px] p-2 rounded-[3px]'>Women (21)</li>
</ul>

</div>



<div className='flex flex-col gap-2'>
<h1 className="cursor-pointer text-start text-[22px] text-[#151875] py-3">
 Recent Post
  </h1>

<FlexCard img='./images/flex1.svg' title='It is a long established..' para='Aug 09 2020'/>
<FlexCard img='./images/flex2.svg' title='It is a long established..' para='Aug 09 2020'/>
<FlexCard img='./images/flex3.svg' title='It is a long established..' para='Aug 09 2020'/>
</div>




<div className='flex flex-col gap-2'>
<h1 className="cursor-pointer text-start text-[22px] text-[#151875] py-3">
Sale Product
  </h1>

<FlexCard img='./images/blogflex1.svg' title='Elit ornare in enim mau...' para='Aug 09 2020'/>
<FlexCard img='./images/blogflex2.svg' title='Elit ornare in enim mau...' para='Aug 09 2020'/>
<FlexCard img='./images/blogflex3.svg' title='Elit ornare in enim mau...' para='Aug 09 2020'/>
</div>




</div>


</div>




<Image src='./images/Mestonix.svg' alt='Mestonix' width={904} height={93} className='mx-auto mb-4 md:my-14'/>



</>
  )
}

export default Blog