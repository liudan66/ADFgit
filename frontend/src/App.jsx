import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import { getCart } from './services/api';
import { getCurrentUser } from './services/auth';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    updateCartCount();
  }, []);

  const updateCartCount = async () => {
    const user = getCurrentUser();
    if (!user) {
      setCartItemCount(0);
      return;
    }

    try {
      const response = await getCart();
      const count = response.data.items?.reduce((total, item) => total + item.quantity, 0) || 0;
      setCartItemCount(count);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header cartItemCount={cartItemCount} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onCartUpdate={updateCartCount} />} />
            <Route path="/products/:id" element={<ProductDetails onCartUpdate={updateCartCount} />} />
            <Route path="/cart" element={<CartPage onCartUpdate={updateCartCount} />} />
            <Route path="/checkout" element={<Checkout onCartUpdate={updateCartCount} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
