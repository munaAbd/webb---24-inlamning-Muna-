import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import ProductCard from './ProductCard';  // Lägg till denna import

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(db, 'produkter');

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setProducts(productArray);
      }
    });
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;