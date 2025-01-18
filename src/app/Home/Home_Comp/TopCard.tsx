import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price:string;
}

const TopCard: React.FC<ProductCardProps> = ({ image, title,price }) => {
  return (
    <div className="flex flex-col w-[269px] h-[345px]  overflow-hidden items-center justify-center text-center">
    
      <div className="relative flex items-center justify-center">
        <Image
          src={image}
          width={286}
          height={345}
          alt={title}
        
          className="object-cover"
        />
      </div>
     
    </div>
  );
};

export default TopCard;

