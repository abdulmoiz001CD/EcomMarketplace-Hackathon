import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price:string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title,price }) => {
  return (
    <div className="flex flex-col w-[360px] bg-[#F7F7F7]  overflow-hidden items-center justify-center text-center">
      <div className="relative h-[236px] w-[240px] flex items-center justify-center bg-[#F7F7F7]">
        <img
          src={image}
          alt={title}
        
          className="object-cover"
        />
      </div>
      <div className="p-4 flex items-center justify-between gap-4 bg-white w-full">
        <h3 className="font-bold text-[12px] sm:text-lg texr-red">{title}</h3>
        <div className="flex gap-3 items-center">
  <p className="text-[10px] sm:text-sm text-[#151875]">{price}</p>
  <p className="text-[10px] sm:text-[12px] text-[#FB2448] line-through">$65.00</p>
</div>

        
       
      </div>
    </div>
  );
};

export default ProductCard;

