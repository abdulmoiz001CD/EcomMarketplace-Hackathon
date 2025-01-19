import React from "react";

interface DisplayCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ id, name, image, description }) => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-sm text-gray-500">ID: {id}</p>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default DisplayCard;
