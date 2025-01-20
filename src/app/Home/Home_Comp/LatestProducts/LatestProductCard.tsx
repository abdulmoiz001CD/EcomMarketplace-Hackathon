'use client'
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addtoCart } from '@/app/Shop/Redux/CartSlice';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: string | number;
  id: string;
  stockLevel: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name,  description, image, price, stockLevel,}) => {

  const dispatch = useDispatch();
  const title = name
  const handleAddToCart = () => {
    const item = {
      id,
      title,
      description,
      image,
      price,
      stockLevel,
    };
    console.log('Dispatching item:', item); // Debug log
    dispatch(addtoCart(item));
  };


  return (
    <div className="group relative flex flex-col w-[360px] bg-[#F7F7F7]  overflow-hidden items-center justify-center text-center transition-transform hover:scale-105">
      <div className="relative h-[236px] w-[240px] flex items-center justify-center bg-[#F7F7F7]">
        <img
          src={image}
          alt={name}

          className="object-cover"
        />
      </div>
      <FiShoppingCart onClick={handleAddToCart}
        className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] hidden group-hover:block transition-opacity duration-300"
      />
      <div className="p-4 flex items-center justify-between gap-4 bg-white w-full">
        <h3 className="font-bold text-[12px] sm:text-[14px] texr-red">{name}</h3>
        <div className="flex gap-3 items-center">
          <p className="text-[10px] sm:text-sm text-[#151875]">{price}</p>
          <p className="text-[10px] sm:text-[12px] text-[#FB2448] line-through">$65.00</p>
        </div>



      </div>
    </div>
  );
};

export default ProductCard;

