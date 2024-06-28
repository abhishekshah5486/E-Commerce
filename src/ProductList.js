import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, selectedCategory }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products
        .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
