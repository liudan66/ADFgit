const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./src/models/Product');
const User = require('./src/models/User');

dotenv.config();

const sampleProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 79.99,
    category: 'electronics',
    image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Headphones',
    stock: 50,
    rating: 4.5,
    numReviews: 128,
  },
  {
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking, GPS, and water resistance.',
    price: 299.99,
    category: 'electronics',
    image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Smart+Watch',
    stock: 30,
    rating: 4.7,
    numReviews: 89,
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt available in multiple colors.',
    price: 19.99,
    category: 'clothing',
    image: 'https://via.placeholder.com/300/00FF00/000000?text=T-Shirt',
    stock: 100,
    rating: 4.2,
    numReviews: 203,
  },
  {
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans with premium quality fabric.',
    price: 49.99,
    category: 'clothing',
    image: 'https://via.placeholder.com/300/FFFF00/000000?text=Jeans',
    stock: 75,
    rating: 4.4,
    numReviews: 156,
  },
  {
    name: 'Programming in JavaScript',
    description: 'Comprehensive guide to modern JavaScript development.',
    price: 39.99,
    category: 'books',
    image: 'https://via.placeholder.com/300/FF00FF/FFFFFF?text=JS+Book',
    stock: 40,
    rating: 4.8,
    numReviews: 92,
  },
  {
    name: 'The Art of Clean Code',
    description: 'Learn best practices for writing maintainable and efficient code.',
    price: 44.99,
    category: 'books',
    image: 'https://via.placeholder.com/300/00FFFF/000000?text=Clean+Code',
    stock: 35,
    rating: 4.9,
    numReviews: 167,
  },
  {
    name: 'Coffee Maker Deluxe',
    description: 'Premium automatic coffee maker with programmable settings.',
    price: 129.99,
    category: 'home',
    image: 'https://via.placeholder.com/300/800080/FFFFFF?text=Coffee+Maker',
    stock: 25,
    rating: 4.3,
    numReviews: 78,
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Extra thick yoga mat with non-slip surface and carrying strap.',
    price: 34.99,
    category: 'sports',
    image: 'https://via.placeholder.com/300/FFA500/FFFFFF?text=Yoga+Mat',
    stock: 60,
    rating: 4.6,
    numReviews: 134,
  },
  {
    name: 'Laptop Stand Adjustable',
    description: 'Ergonomic laptop stand with adjustable height and angle.',
    price: 45.99,
    category: 'electronics',
    image: 'https://via.placeholder.com/300/008080/FFFFFF?text=Laptop+Stand',
    stock: 45,
    rating: 4.5,
    numReviews: 91,
  },
  {
    name: 'Water Bottle Insulated',
    description: 'Stainless steel insulated water bottle keeps drinks cold for 24 hours.',
    price: 24.99,
    category: 'sports',
    image: 'https://via.placeholder.com/300/FFD700/000000?text=Water+Bottle',
    stock: 80,
    rating: 4.7,
    numReviews: 215,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');

    // Create an admin user (if not exists)
    const adminExists = await User.findOne({ email: 'admin@shopmart.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@shopmart.com',
        password: 'admin123',
        role: 'admin',
      });
      console.log('Created admin user (email: admin@shopmart.com, password: admin123)');
    }

    // Create a regular test user (if not exists)
    const userExists = await User.findOne({ email: 'user@test.com' });
    if (!userExists) {
      await User.create({
        name: 'Test User',
        email: 'user@test.com',
        password: 'test123',
        role: 'user',
      });
      console.log('Created test user (email: user@test.com, password: test123)');
    }

    console.log('\n✓ Database seeded successfully!');
    console.log('\nSample credentials:');
    console.log('Admin: admin@shopmart.com / admin123');
    console.log('User: user@test.com / test123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
