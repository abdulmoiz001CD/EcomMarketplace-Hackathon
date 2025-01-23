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
  quantity?: number; // This is missing in your object
  name?: string; // This might be another missing property
}

const ProductCard: React.FC<ProductCardProps> = ({id,image, title,name,quantity, description, price,stockLevel}) => {

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
    <div className="group relative flex flex-col w-[360px] bg-[#F7F7F7]  overflow-hidden items-center justify-center text-center transition-transform hover:scale-105">
      <div className="relative h-[236px] w-[240px] flex items-center justify-center bg-[#F7F7F7]">
        <Image
          src={image}
          alt={name? name : title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <FiShoppingCart onClick={handleAddToCart}
        className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] hidden group-hover:block transition-opacity duration-300"
      />
      <div className="p-4 flex items-center justify-between gap-4 bg-white w-full">
        <h3 className="font-bold text-[12px] sm:text-[14px] texr-red">{name? name : title}</h3>
        <div className="flex gap-3 items-center">
          <p className="text-[10px] sm:text-sm text-[#151875]">{price}</p>
          <p className="text-[10px] sm:text-[12px] text-[#FB2448] line-through">$65.00</p>
        </div>



      </div>
    </div>
  );
};

export default ProductCard;

