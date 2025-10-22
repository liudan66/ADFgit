import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="no-products">No products found</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
