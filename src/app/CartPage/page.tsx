// import { useShoppingCart } from 'use-shopping-cart';

// const Cart = () => {
//   const {
//     cartDetails,
//     totalPrice,
//     cartCount,
//     removeItem,
//   } = useShoppingCart();

//   const items = Object.values(cartDetails || {});

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       <p>Total Items: {cartCount}</p>
//       <p>Total Price: ${(totalPrice / 100).toFixed(2)}</p>

//       {items.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>Price: ${(item.price / 100).toFixed(2)}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => removeItem(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;


'use client'
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export const CartItems = () => {
  const { cartDetails, removeItem } = useShoppingCart();
   
  if (!cartDetails) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
      {Object.keys(cartDetails).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {Object.entries(cartDetails).map(([id, product]) => (
            <li key={id}>
              <img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} />
              <div>
                <h3>{product.name}</h3>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${(product.price / 100).toFixed(2)}</p>
                <button onClick={() => removeItem(id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default CartItems;




