# Online Shopping Backend

Express-based backend API for the online shopping website.

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`
2. Update the environment variables in `.env`:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: Server port (default: 5000)

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The API will start on http://localhost:5000

## Project Structure

```
/src
  /config
    db.js           - MongoDB connection configuration
  /models
    User.js         - User model
  /routes
    userRoutes.js   - User authentication routes
  server.js         - Express server setup
```

## API Endpoints

### User Routes (`/api/users`)

- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /profile` - Get user profile (requires authentication)

## Technologies Used

- Express 4.18.2
- Mongoose 7.3.0
- JSON Web Token 9.0.1
- Bcryptjs 2.4.3
- CORS 2.8.5
