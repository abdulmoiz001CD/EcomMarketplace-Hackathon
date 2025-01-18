import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price:string;
}

const TrendingCard: React.FC<ProductCardProps> = ({ image, title,price }) => {
  return (
    <div className="flex flex-col w-[270px] h-[350px] bg-[#F7F7F7]  overflow-hidden items-center justify-center text-center shadow-md">
    
      <div className="relative h-[244px]  flex items-center justify-center bg-[#F7F7F7]">
        <Image
          src={image}
          width={171}
          height={171}
          alt={title}
        
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-center  gap-1 bg-white w-full mt-9">
        <h3 className="font-bold text-[12px] sm:text-lg texr-red">{title}</h3>
        <div className="flex gap-3 items-center">
  <p className="text-[10px] sm:text-sm text-[#151875]">{price}</p>
  <p className="text-[10px] sm:text-[12px] text-[#1518754D] line-through">$65.00</p>
</div>

        
       
      </div>
    </div>
  );
};

export default TrendingCard;

