const mongoose = require('mongoose');

// Replace with your own MongoDB URL if using MongoDB Atlas
const mongoURI = 'mongodb://localhost:27017/categoriesdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});
