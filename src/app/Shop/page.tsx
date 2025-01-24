'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '@/app/Shop/Redux/CartSlice';
import { RootState } from '@/app/Shop/Redux/Store'; 

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