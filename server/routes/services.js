const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed mock data
router.post('/seed', async (req, res) => {
  try {
    await Service.deleteMany({});
    const mockData = [
      { title: "Event Management", description: "End-to-end execution of sports and adventure events.", iconName: "Trophy" },
      { title: "Marketing & Sponsorship", description: "Connect with brands and maximize event visibility.", iconName: "Megaphone" },
      { title: "Logistics & Equipment", description: "State-of-the-art sporting gear and seamless logistics.", iconName: "Truck" },
      { title: "Consulting", description: "Strategic planning for sustainable sports ecosystems.", iconName: "LineChart" },
      { title: "Social Media & Fan Engagement", description: "Build thriving digital communities around your sport.", iconName: "Users" }
    ];
    const created = await Service.insertMany(mockData);
    res.json({ message: "Seeded successfully", data: created });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
