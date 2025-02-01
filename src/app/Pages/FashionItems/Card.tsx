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
    <div className="group relative flex flex-col w-[270px] bg-[#F6F7FB] rounded-lg shadow-lg border border-white overflow-hidden items-center justify-center text-center transition-transform hover:scale-105">
      <div className="relative h-[236px] w-[178px] m-[20px] mx-[50px] flex items-center justify-center bg-[#F6F7FB]">
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


      <div className="p-4 flex flex-col items-center gap-2 bg-white w-full">
        <h3 className="font-bold text-lg mt-2 texr-red">{title}</h3>

{/* Cirlce Dot */}
        <div className="flex items-center gap-1 justify-center">
  
  <div className="w-[10px] h-[10px] bg-[#F701A8] rounded-full"></div>
  <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
  <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
</div>

<div className="text-sm">{price} <span className='text-[#FB2E86] text-[14px] pl-1'> ${discount}</span></div>
      </div>
    </div>
  );
};

export default ProductCard;
