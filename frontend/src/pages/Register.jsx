import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { register } from '../services/auth';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (name, email, password) => {
    try {
      await register(name, email, password);
      navigate('/');
      window.location.reload(); // Reload to update header
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <RegisterForm onSubmit={handleRegister} error={error} />
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
