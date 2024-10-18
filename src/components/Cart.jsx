import React from 'react';

function Cart({ cart, clearCart, completePurchase }) {
  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Kundvagn</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} x {product.quantity} = {product.price * product.quantity} kr
          </li>
        ))}
      </ul>
      <h2>Totalpris: {total} kr</h2>
      <button onClick={completePurchase}>Genomför köp</button>
      <button onClick={clearCart}>Töm kundvagnen</button>
    </div>
  );
}

export default Cart;
