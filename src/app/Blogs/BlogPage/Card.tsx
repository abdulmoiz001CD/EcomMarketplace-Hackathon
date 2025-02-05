import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";


interface CardProps {
  image:string
  title: string;
  author:string;
  publishedAt:string;
  excerpt:string;
  slug:string
}

const Card: React.FC<CardProps> = ({ image, title,author,publishedAt,excerpt ,slug}) => {
  return (
    <div className="flex flex-col max-w-[870px] w-full h-auto bg-[#F7F7F7] overflow-hidden ">
      <div className="relative max-w-[870px] w-full 2xl:w-[870px]  h-[453px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-4 flex flex-col  gap-4 bg-white w-full h-[40%]">

  
      <div className="flex gap-8">

      <div className="flex gap-2 items-center">
      <FaPenNib className="text-[#FB2E86] text-[11px]"/>
      <div className="max-w-[160px] w-full text-center rounded-[5px] bg-[#FFE7F9] text-sm px-2 py-1">{author}</div>
      </div>
      <div className="flex gap-2 items-center">
      <FaRegCalendarAlt className="text-[#FFA454] text-[11px]"/>
      <div className="max-w-[160px] w-full text-center rounded-[5px] bg-[#FFECE2] text-sm px-2 py-1">{publishedAt}</div>
      </div>

      </div>


        <h3 className="font-bold text-[16px] sm:text-[30px] text-[#151875]">{title}</h3>
    
     
         <p className="text-[#8A8FB9]">{excerpt}</p>

<div className="flex items-center gap-1">
<p className="text-[14px] sm:text-[18px] text-[#151875]"><Link href={`./BlogDetail/${slug}`}>Read More</Link></p>
<span className="w-[5px] h-[5px] rounded-full bg-red-500"></span>
</div>

         
        </div>
      </div>
  
  );
};

export default Card;
