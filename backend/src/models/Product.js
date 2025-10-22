const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Please provide product category'],
    enum: ['electronics', 'clothing', 'books', 'home', 'sports', 'other'],
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300',
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
