import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Pris: {product.price} kr</p>
      <p>Lagersaldo: {product.stock}</p>
      <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
        Lägg till i kundvagnen
      </button>
    </div>
  );
}

export default ProductCard;
