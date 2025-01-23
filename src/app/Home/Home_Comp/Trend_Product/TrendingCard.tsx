'use client'
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux'; 
import { addtoCart } from '@/app/Shop/Redux/CartSlice';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string | number;
  stockLevel: string | number;
  quantity?: number; 
  name?: string; 
}

const TrendingCard: React.FC<ProductCardProps> = ({ id, image, title, price, stockLevel, description }) => {
  const Title = title.split(' ').slice(0, 3).join(' ');
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id,
      title,
      description,
      image,
      price,
      stockLevel,
      name:title,
      quantity:1
    };
    console.log('Dispatching item:', item); // Debug log
    dispatch(addtoCart(item));
  };

  return (
    <div className="group relative flex flex-col w-[270px] h-[350px] bg-[#F7F7F7] overflow-hidden items-center justify-center text-center shadow-md transition-transform hover:scale-105">
      <div className="relative h-[244px] flex items-center justify-center bg-[#F7F7F7]">
        <Image
          src={image}
          width={171}
          height={171}
          alt={title}
          className="object-cover"
        />
      </div>

    
      <FiShoppingCart
        onClick={handleAddToCart}
        className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      />

      <div className="p-4 flex flex-col items-center gap-1 bg-white w-full mt-9">
        <h3 className="font-bold text-[12px] sm:text-[14px] texr-red">{Title}</h3>
        <p className="text-600 text-sm text-[#151875]">
          stocks: <span className="text-600 text-sm text-[#e03232]">{stockLevel}</span>
        </p>
        <div className="flex gap-3 items-center">
          <p className="text-[10px] sm:text-sm text-[#151875]">{price}</p>
          <p className="text-[10px] sm:text-[12px] text-[#1518754D] line-through">$65.00</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;