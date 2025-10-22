import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct, addToCart } from '../services/api';
import { getCurrentUser } from '../services/auth';

const ProductDetails = ({ onCartUpdate }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await getProduct(id);
      setProduct(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await addToCart(product._id, quantity);
      if (onCartUpdate) onCartUpdate();
      alert('Product added to cart!');
      navigate('/cart');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add to cart');
    }
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image-large">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <div className="product-rating">
            ⭐ {product.rating.toFixed(1)} ({product.numReviews} reviews)
          </div>
          <p className="product-category">Category: {product.category}</p>
          <h2 className="product-price">${product.price.toFixed(2)}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-stock">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>
          
          {product.stock > 0 && (
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              <button
                className="btn btn-primary btn-large"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          )}
          
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
