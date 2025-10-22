import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/api';
import { addToCart } from '../services/api';
import { getCurrentUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Home = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [category, searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (category) params.category = category;
      if (searchTerm) params.search = searchTerm;

      const response = await getProducts(params);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product) => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await addToCart(product._id, 1);
      if (onCartUpdate) onCartUpdate();
      alert('Product added to cart!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add to cart');
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to ShopMart</h1>
        <p>Find the best products at the best prices</p>
      </div>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
          <option value="sports">Sports</option>
          <option value="other">Other</option>
        </select>
      </div>

      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Home;
