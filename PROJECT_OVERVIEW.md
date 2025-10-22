# Online Shopping Website - Project Overview

This repository contains the initial setup for an online shopping website with a separate frontend and backend architecture.

## Project Structure

```
/frontend                   - React-based frontend application
  /src
    /components            - Reusable UI components
      Header.jsx          - Navigation bar
      Footer.jsx          - Footer component
    /pages                - Page components
      Home.jsx            - Home/landing page
    /styles
      main.css            - Global styles
    App.jsx               - Main app with routing
    index.jsx             - Entry point
  /public
    index.html            - HTML template
  package.json            - Frontend dependencies

/backend                   - Express-based REST API
  /src
    /config
      db.js               - MongoDB connection
    /models
      User.js             - User model with authentication
    /routes
      userRoutes.js       - User authentication routes
    server.js             - Express server setup
  .env.example            - Environment variables template
  package.json            - Backend dependencies

.gitignore                - Git ignore rules
```

## Getting Started

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
   npm start
   ```

The frontend will be available at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your secret key for JWT tokens
   - `PORT`: Server port (default: 5000)

5. Start the server:
   ```bash
   npm start
   ```

The API will be available at http://localhost:5000

## Technologies Used

### Frontend
- **React** 18.2.0 - UI library
- **React Router** 6.14.0 - Client-side routing
- **Axios** 1.4.0 - HTTP client

### Backend
- **Express** 4.18.2 - Web framework
- **Mongoose** 7.3.0 - MongoDB ODM
- **JWT** 9.0.1 - Authentication
- **Bcryptjs** 2.4.3 - Password hashing
- **Express Rate Limit** 6.8.1 - Rate limiting for security

## API Endpoints

### User Authentication (`/api/users`)

- `POST /register` - Register a new user
  - Rate limited: 5 requests per 15 minutes per IP
  - Body: `{ name, email, password }`

- `POST /login` - Login user
  - Rate limited: 5 requests per 15 minutes per IP
  - Body: `{ email, password }`

- `GET /profile` - Get user profile (requires authentication)

## Security Features

- **Rate Limiting**: Authentication routes are rate-limited to prevent brute-force attacks
- **Password Hashing**: User passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Email validation with secure regex patterns
- **CORS**: Cross-Origin Resource Sharing enabled for frontend-backend communication

## Development Guidelines

1. Keep dependencies up to date
2. Follow the established project structure
3. Use environment variables for sensitive configuration
4. Add tests for new features
5. Document API endpoints as they are created

## Future Enhancements

- Product catalog and management
- Shopping cart functionality
- Order processing
- Payment integration
- User profile management
- Admin dashboard
- Product search and filtering

## License

ISC
