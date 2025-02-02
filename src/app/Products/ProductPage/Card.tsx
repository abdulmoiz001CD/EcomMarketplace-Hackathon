'use client'

import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
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
    discount:number,
  }
  

const ProductCard: React.FC<ProductCardProps> = ({ image, title,price,discount, description,id,stockLevel,}) => {
 
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
        <div className="group relative flex flex-col md:flex-row w-full max-w-[1141px] w-fill min-h-[254px] bg-[#F6F7FB]   overflow-hidden transition-transform hover:scale-105">
            {/* Image Container */}
            <div className="relative h-[217.56px] w-[313.63px] flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-center"
                />
            </div>

            <FiShoppingCart onClick={handleAddToCart}
              className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] hidden group-hover:block transition-opacity duration-300"
            />

            {/* Product Details */}
            <div className="flex-1 p-6 flex flex-col justify-center bg-white">

                <div className="flex gap-4">

                    <h3 className="font-bold text-lg mb-2">{title}</h3>

                    {/* Color Options */}
                    <div className="flex items-center gap-1 mb-2">
                        <div className="w-[10px] h-[10px] bg-[#F701A8] rounded-full"></div>
                        <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
                        <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
                    </div>


                </div>
                {/* Price */}
                <div className="text-sm">
                    {price}
                    <span className="text-[#FB2E86] text-[14px] pl-4">${discount}</span>
                </div>


   <p className="max-w-[591.93px] w-full py-3 text-[#9295AA]">{description}</p>
  
   <ul className="max-w-[144.67px] w-full flex justify-between items-center gap-1 mb-2 py-3">
    <FaRegHeart className='text-[18px]  mb-[3px]'/>
    <FiShoppingCart className='text-[18px] mb-[3px]' />
    <CiSearch className="text-[18px] mb-[3px]" />
                    </ul>


            </div>
        </div>
    );
};

export default ProductCard;
