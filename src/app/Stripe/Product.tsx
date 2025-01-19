import { useShoppingCart } from 'use-shopping-cart'
import {Product } from './ProductCard'
import { CartItems } from './CartItem'

const productData = [
  {
    name: 'Bananas',
    price_id: 'price_GBJ2Ep8246qeeT',
    // price in smallest currency unit (e.g. cent for USD)
    price: 400,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  },
  {
    name: 'Tangerines',
    price_id: 'price_GBJ2WWfMaGNC2Z',
    // price in smallest currency unit (e.g. cent for USD)
    price: 100,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  }
]
export function App() {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart();

  const handleCheckout = async () => {
    const sessionId = "your-session-id-here"; // Replace with your actual session ID logic
    try {
      await redirectToCheckout(sessionId); // Pass the sessionId directly
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <div>
      {/* Renders the products */}
      {productData.map((product) => (
        <Product key={product.price_id} product={product} />
      ))}

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      <CartItems />

      {/* Redirects the user to Stripe */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
