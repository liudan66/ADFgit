import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Online Shopping</h1>
        <p>Your one-stop destination for all your shopping needs</p>
        <button className="cta-button">Start Shopping</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Wide Selection</h3>
          <p>Browse thousands of products across various categories</p>
        </div>
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly to your doorstep</p>
        </div>
        <div className="feature">
          <h3>Secure Payment</h3>
          <p>Shop with confidence using our secure payment system</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
