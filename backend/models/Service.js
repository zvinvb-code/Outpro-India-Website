const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  iconName: { type: String, required: true } // Name of lucide-react icon
});

module.exports = mongoose.model('Service', ServiceSchema);
