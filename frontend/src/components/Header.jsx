import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/auth';

const Header = ({ cartItemCount }) => {
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>ShopMart</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/cart">
                Cart {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
              </Link>
              <Link to="/orders">Orders</Link>
              <span className="user-name">Hello, {user.name}</span>
              <button onClick={handleLogout} className="btn-link">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
