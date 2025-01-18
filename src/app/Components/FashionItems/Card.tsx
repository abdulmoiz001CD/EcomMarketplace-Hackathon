import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;

}

const ProductCard: React.FC<ProductCardProps> = ({ image, title}) => {
  return (
    <div className="flex flex-col w-[270px] bg-[#F6F7FB] rounded-lg shadow-lg border border-white overflow-hidden items-center justify-center text-center">
      <div className="relative h-[236px] w-[178px] m-[20px] mx-[50px] flex items-center justify-center bg-[#F6F7FB]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-center"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-2 bg-white w-full">
        <h3 className="font-bold text-lg mt-2 texr-red">{title}</h3>

{/* Cirlce Dot */}
        <div className="flex items-center gap-1 justify-center">
  
  <div className="w-[10px] h-[10px] bg-[#F701A8] rounded-full"></div>
  <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
  <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
</div>

<div className="text-sm">$26.00 <span className='text-[#FB2E86] text-[14px] pl-1'> $42.00</span></div>
      </div>
    </div>
  );
};

export default ProductCard;
