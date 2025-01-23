// 'use client';

// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/app/Shop/Redux/Store';
// import { setProducts } from '@/app/Shop/Redux/CartSlice';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// const ShopComponent = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state: RootState) => state.products.products);
//   const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

//   // Fetch products from an API or other source and dispatch to Redux
//   // Example: Fetch products on component mount
//   useState(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('/api/products');
//       const data = await response.json();
//       dispatch(setProducts(data));
//     };
//     fetchProducts();
//   }, [dispatch]);

//   const handleSelectProduct = (productId: string) => {
//     if (selectedProducts.includes(productId)) {
//       setSelectedProducts(selectedProducts.filter((id) => id !== productId));
//     } else {
//       setSelectedProducts([...selectedProducts, productId]);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
//               selectedProducts.includes(product.id) ? 'border-2 border-blue-500' : 'border border-gray-200'
//             }`}
//             onClick={() => handleSelectProduct(product.id)}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
//         <ul className="space-y-2">
//           {selectedProducts.map((productId) => {
//             const product = products.find((p) => p.id === productId);
//             return (
//               <li key={productId} className="text-lg">
//                 {product?.name} - ${product?.price.toFixed(2)}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ShopComponent;












'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '@/app/Shop/Redux/CartSlice';
import { RootState } from '@/app/Shop/Redux/Store'; // You'll need to import your RootState type
import Button from '../Home/Home_Comp/Button';
import Link from 'next/link';

interface CartItem {
  id: string;
  title: string;
  description: string;
  image: string;
  quantity:number;
  name:string;
}

const CartDisplay: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-4 text-center min-h-[40rem]">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <>
    <div className="p-4 min-h-[40rem] flex flex-col justify-items-center items-center">
      <h2 className="text-2xl font-bold mb-4 p-4 text-[#480f48]">Shopping Cart ({cartItems.length} items)</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((item: CartItem) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md  flex h-[10rem]"
          >
          
            {/* Card Content */}
            <div className="p-4">
              <div className="aspect-square relative overflow-hidden rounded-md mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-center w-[6rem] h-[6rem]"
                />
              </div>
            </div>

            <div className='flex flex-col'>
            <h3 className="text-lg font-semibold">{item.title? item.title :item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm font-medium mt-2">Quantity: {item.quantity}</p>
             {/* Card Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md 
                         flex items-center gap-2 transition-colors duration-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Remove
              </button>
            </div>
            </div>

            
       
          </div>
        ))}
      </div>

      <Link href="Shop/checkOutForm"> 
        <button className=' mt-[9rem] bg-[#6c146c] text-white p-3 rounded'>Go to Checkout Form</button>
      </Link>

    </div>

  
   
    </>
  );



  







};

export default CartDisplay;