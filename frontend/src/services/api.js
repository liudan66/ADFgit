import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Products
export const getProducts = (params) => api.get('/products', { params });
export const getProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// Cart
export const getCart = () => api.get('/cart');
export const addToCart = (productId, quantity) => api.post('/cart', { productId, quantity });
export const updateCartItem = (productId, quantity) => api.put(`/cart/${productId}`, { quantity });
export const removeFromCart = (productId) => api.delete(`/cart/${productId}`);
export const clearCart = () => api.delete('/cart');

// Orders
export const createOrder = (data) => api.post('/orders', data);
export const getMyOrders = () => api.get('/orders/myorders');
export const getOrder = (id) => api.get(`/orders/${id}`);
export const getAllOrders = () => api.get('/orders');
export const updateOrderStatus = (id, status) => api.put(`/orders/${id}/status`, { status });

export default api;
