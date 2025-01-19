export function Product({ product }:any) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price / 100}</p> {/* Price is converted from cents to dollars */}
      <button>Add to Cart</button>
    </div>
  );
}
