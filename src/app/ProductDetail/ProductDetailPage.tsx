'use client';

import { useDispatch } from 'react-redux';
import { addtoCart } from '@/app/Shop/Redux/CartSlice';

interface productType {
  _id: string;
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
      url: string;
    };
  };
  price: string;
  discountPercentage?: number;
  stockLevel: number;
  category: string;
}

interface ProductDetailPageProps {
  product: productType;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: product._id,
      title: product.name,
      description: product.description,
      image: product.image.asset.url,
    };
    dispatch(addtoCart(item));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image.asset.url}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.stockLevel > 0 ? (
                    <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      In Stock ({product.stockLevel})
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-800">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-4">
                <button
                  onClick={handleAddToCart}
                  className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium ${
                    product.stockLevel === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
                  }`}
                  disabled={product.stockLevel === 0}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;