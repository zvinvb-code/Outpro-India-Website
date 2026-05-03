const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const portfolioRoutes = require('./routes/portfolio');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (Local by default, fallback if needed)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/outpro_india';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/services', servicesRoutes);

app.get('/', (req, res) => {
  res.send('Outpro.India API is running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
