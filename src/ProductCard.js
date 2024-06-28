import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;
