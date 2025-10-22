import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/products/${product._id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          ⭐ {product.rating.toFixed(1)} ({product.numReviews} reviews)
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
