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
    discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, discount, description, id, stockLevel }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
            id,
            title,
            description,
            image,
            price,
            stockLevel,
            name: title,
            quantity: 1
        };
        dispatch(addtoCart(item));
    };

    return (
        <div className="group relative flex flex-col w-full bg-[#F6F7FB] overflow-hidden transition-transform hover:scale-105 md:hover:scale-105">
            {/* Image Container */}
            <div className="relative w-full aspect-square md:aspect-[1.5/1] lg:aspect-[1.3/1] flex items-center justify-center p-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-4"
                />
                <FiShoppingCart 
                    onClick={handleAddToCart}
                    className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] hidden group-hover:block transition-opacity duration-300 md:top-6 md:right-6"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-center bg-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl line-clamp-2">{title}</h3>
                    <div className="flex flex-col md:text-right">
                        <span className="text-sm line-through text-gray-400">{price}</span>
                        <span className="text-[#FB2E86] text-lg md:text-xl lg:text-2xl font-semibold">
                            ${discount}
                        </span>
                    </div>
                </div>

                {/* Color Options */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-[#F701A8] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#8568FF] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#DE9034] rounded-full"></div>
                </div>

                <p className="text-sm text-[#9295AA] line-clamp-3 mb-4 md:mb-6">
                    {description}
                </p>

                <ul className="flex justify-between items-center gap-2 md:gap-4 max-w-[200px]">
                    <li className="p-2 hover:text-[#ce8346] cursor-pointer">
                        <FaRegHeart className="text-lg md:text-xl" />
                    </li>
                    <li className="p-2 hover:text-[#ce8346] cursor-pointer">
                        <FiShoppingCart className="text-lg md:text-xl" />
                    </li>
                    <li className="p-2 hover:text-[#ce8346] cursor-pointer">
                        <CiSearch className="text-lg md:text-xl" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;