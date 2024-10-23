import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Pris: {product.price} kr</p>
      <p>Lagersaldo: {product.stock}</p>
      <button onClick={() => addToCart(product)}>Lägg till i kundvagnen</button>
    </div>
  );
}

export default ProductCard;
