import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../components/Cart';
import { getCart, updateCartItem, removeFromCart } from '../services/api';
import { getCurrentUser } from '../services/auth';

const CartPage = ({ onCartUpdate }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await getCart();
      setCart(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await updateCartItem(productId, quantity);
      fetchCart();
      if (onCartUpdate) onCartUpdate();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update cart');
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCart();
      if (onCartUpdate) onCartUpdate();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to remove item');
    }
  };

  return (
    <div className="container">
      <CartComponent
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default CartPage;
