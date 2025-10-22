# Quick Start Guide - Online Shopping Website

This guide will help you get the shopping website up and running in minutes.

## Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- MongoDB - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (in a new terminal)
cd frontend
npm install
```

### Step 2: Configure Environment

Create a `.env` file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Edit `.env` with your settings:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shopping
JWT_SECRET=your-super-secret-key-change-me
```

### Step 3: Start MongoDB

**On macOS/Linux:**
```bash
mongod
```

**On Windows:**
```bash
net start MongoDB
```

**Or use MongoDB Atlas** (cloud database):
- Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster
- Get connection string
- Update `MONGODB_URI` in `.env`

### Step 4: Seed Database (Optional)

Populate the database with sample products and test users:

```bash
cd backend
npm run seed
```

This creates:
- 10 sample products across different categories
- Admin user: `admin@shopmart.com` / `admin123`
- Test user: `user@test.com` / `test123`

### Step 5: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:3000

### Step 6: Access the Application

Open your browser and navigate to: **http://localhost:3000**

## Test the Features

### 1. Browse Products
- Homepage displays all products
- Use search bar to find specific products
- Filter by category using dropdown

### 2. User Registration
- Click "Register" in header
- Create a new account
- Or use test account: `user@test.com` / `test123`

### 3. Shopping Cart
- Click "Add to Cart" on any product
- View cart from header
- Adjust quantities
- Remove items

### 4. Checkout
- Click "Proceed to Checkout" from cart
- Enter shipping address
- Place order

### 5. Order History
- Click "Orders" in header
- View all your orders
- Check order status

### 6. Admin Features (Admin Account Only)
Login with `admin@shopmart.com` / `admin123` to:
- Create new products
- Update product details
- Delete products
- View all orders
- Update order status

## API Endpoints Reference

### Authentication
```
POST /api/users/register    - Register new user
POST /api/users/login        - Login
GET  /api/users/profile      - Get profile (Auth required)
PUT  /api/users/profile      - Update profile (Auth required)
```

### Products
```
GET    /api/products         - Get all products
GET    /api/products/:id     - Get single product
POST   /api/products         - Create product (Admin)
PUT    /api/products/:id     - Update product (Admin)
DELETE /api/products/:id     - Delete product (Admin)
```

### Shopping Cart
```
GET    /api/cart             - Get cart (Auth required)
POST   /api/cart             - Add to cart (Auth required)
PUT    /api/cart/:productId  - Update quantity (Auth required)
DELETE /api/cart/:productId  - Remove item (Auth required)
DELETE /api/cart             - Clear cart (Auth required)
```

### Orders
```
POST /api/orders             - Create order (Auth required)
GET  /api/orders/myorders    - Get user orders (Auth required)
GET  /api/orders/:id         - Get order details (Auth required)
GET  /api/orders             - Get all orders (Admin)
PUT  /api/orders/:id/status  - Update order status (Admin)
```

## Testing with cURL

### Register a User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Products
```bash
curl http://localhost:5000/api/products
```

### Get Products by Category
```bash
curl "http://localhost:5000/api/products?category=electronics"
```

### Search Products
```bash
curl "http://localhost:5000/api/products?search=laptop"
```

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running. Start it with `mongod` command.

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**: Change the `PORT` in `.env` file or kill the process using that port.

### CORS Error in Browser
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Ensure backend server is running and CORS is enabled (already configured).

### JWT Token Error
```
Not authorized, token failed
```
**Solution**: Clear localStorage in browser and login again.

## Production Build

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

Deploy the `dist` folder to a static hosting service (Netlify, Vercel, etc.)

## Next Steps

1. Customize product categories
2. Add product images (update image URLs in database)
3. Configure email notifications
4. Add payment gateway integration
5. Deploy to production

## Support

For issues or questions:
1. Check the main [SHOPPING_README.md](./SHOPPING_README.md)
2. Review [SECURITY_SUMMARY.md](./SECURITY_SUMMARY.md)
3. Check MongoDB connection
4. Verify all environment variables

Happy Shopping! 🛍️
