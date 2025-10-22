# Online Shopping Website

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (signup, login, logout)
- Product listing with search and filter functionality
- Shopping cart management
- Checkout process with order placement
- Order history tracking
- Admin dashboard for product management
- Responsive design
- Secure authentication with JWT
- Password hashing with bcrypt
- Input validation and sanitization

## Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS Grid & Flexbox** - Responsive layout

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **CORS** - Cross-origin resource sharing

## Project Structure

```
/backend
  /src
    /config
      - db.js                 # Database configuration
    /controllers
      - userController.js     # User authentication logic
      - productController.js  # Product CRUD operations
      - cartController.js     # Shopping cart logic
      - orderController.js    # Order management
    /models
      - User.js              # User schema
      - Product.js           # Product schema
      - Cart.js              # Cart schema
      - Order.js             # Order schema
    /routes
      - userRoutes.js        # User endpoints
      - productRoutes.js     # Product endpoints
      - cartRoutes.js        # Cart endpoints
      - orderRoutes.js       # Order endpoints
    /middleware
      - auth.js              # JWT authentication
      - errorHandler.js      # Error handling
    - server.js              # Express server setup
  - package.json

/frontend
  /src
    /components
      - Header.jsx           # Navigation header
      - Footer.jsx           # Page footer
      - ProductCard.jsx      # Product display card
      - ProductList.jsx      # Products grid
      - Cart.jsx             # Cart component
      - LoginForm.jsx        # Login form
      - RegisterForm.jsx     # Registration form
    /pages
      - Home.jsx             # Homepage with products
      - ProductDetails.jsx   # Single product view
      - Cart.jsx             # Shopping cart page
      - Checkout.jsx         # Checkout page
      - Login.jsx            # Login page
      - Register.jsx         # Registration page
      - Orders.jsx           # Order history
    /services
      - api.js               # API calls
      - auth.js              # Auth utilities
    /styles
      - main.css             # Global styles
    - App.jsx                # Main app component
    - index.jsx              # Entry point
  - package.json
  - vite.config.js
  - index.html
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shopping
JWT_SECRET=your-secret-key-change-in-production
```

4. Start MongoDB (if running locally):
```bash
# On macOS/Linux
mongod

# On Windows
net start MongoDB
```

5. Start the backend server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

4. Build for production:
```bash
npm run build
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)

### Products
- `GET /api/products` - Get all products (with optional search/filter)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user cart (Protected)
- `POST /api/cart` - Add item to cart (Protected)
- `PUT /api/cart/:productId` - Update cart item quantity (Protected)
- `DELETE /api/cart/:productId` - Remove item from cart (Protected)
- `DELETE /api/cart` - Clear cart (Protected)

### Orders
- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders/myorders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

## Security Features

1. **Password Hashing**: All passwords are hashed using bcryptjs before storing in database
2. **JWT Authentication**: Secure token-based authentication
3. **Input Validation**: Server-side validation using express-validator
4. **CORS Configuration**: Controlled cross-origin requests
5. **Error Handling**: Comprehensive error handling middleware
6. **Protected Routes**: Authentication required for sensitive operations

## Default User Roles

- **user**: Regular customer (default)
- **admin**: Full access to product and order management

## Sample Products Data

To seed the database with sample products, you can use MongoDB Compass or create a seed script.

Example product:
```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "category": "electronics",
  "image": "https://via.placeholder.com/300",
  "stock": 10,
  "rating": 4.5,
  "numReviews": 25
}
```

## Development Tips

1. **MongoDB Connection**: Ensure MongoDB is running before starting the backend
2. **Environment Variables**: Never commit `.env` file to version control
3. **CORS**: The backend is configured to allow requests from the frontend
4. **Proxy**: Vite is configured to proxy `/api` requests to the backend

## Testing the Application

1. Register a new user account
2. Browse products and add items to cart
3. Proceed to checkout and place an order
4. View order history

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in environment variables
2. Use a cloud MongoDB service (MongoDB Atlas)
3. Set a strong `JWT_SECRET`
4. Deploy to services like Heroku, DigitalOcean, or AWS

### Frontend
1. Build the production bundle: `npm run build`
2. Deploy the `dist` folder to services like Netlify, Vercel, or AWS S3
3. Update API endpoints to point to production backend

## Troubleshooting

- **MongoDB Connection Error**: Check if MongoDB is running and the URI is correct
- **CORS Error**: Verify backend CORS configuration includes frontend URL
- **Authentication Failed**: Check if JWT_SECRET matches between requests
- **Port Already in Use**: Change PORT in `.env` file

## Future Enhancements

- Product reviews and ratings
- Payment gateway integration
- Email notifications
- Advanced search and filtering
- Product recommendations
- Wishlist functionality
- Admin analytics dashboard

## License

ISC

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
