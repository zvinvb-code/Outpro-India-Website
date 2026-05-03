const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true }, // e.g., 'Corporate', 'Tournaments', 'Adventure'
  kpis: [{ label: String, value: String }] // e.g., [{label: 'Participants', value: '500+'} ]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
