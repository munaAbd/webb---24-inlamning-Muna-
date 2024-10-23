import React, { useEffect, useState } from 'react';
import { db } from '../firebase';  // Se till att importera från rätt sökväg
import { collection, getDocs } from 'firebase/firestore';  // Firestore-funktioner




function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await db.collection('products').get();
      setProducts(productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
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