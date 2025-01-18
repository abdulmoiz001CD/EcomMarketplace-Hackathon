import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";



interface ProductCardProps {
    image: string;
    title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1141px] w-fill min-h-[254px] bg-[#F6F7FB]   overflow-hidden">
            {/* Image Container */}
            <div className="relative h-[217.56px] w-[313.63px] flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-center"
                />
            </div>

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
                    $26.00
                    <span className="text-[#FB2E86] text-[14px] pl-4">$42.00</span>
                </div>


   <p className="max-w-[591.93px] w-full py-3 text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
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
