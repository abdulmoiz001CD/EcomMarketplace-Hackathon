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
