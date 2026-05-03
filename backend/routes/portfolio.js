const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await Portfolio.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed mock data
router.post('/seed', async (req, res) => {
  try {
    await Portfolio.deleteMany({});
    const mockData = [
      {
        title: "National Corporate League",
        category: "Corporate",
        kpis: [{ label: "Participants", value: "1,200" }, { label: "Companies", value: "45" }],
        image: "/assets/portfolio-1.jpg"
      },
      {
        title: "Himalayan Adventure Challenge",
        category: "Adventure",
        kpis: [{ label: "Athletes", value: "300" }, { label: "Elevation", value: "4,500m" }],
        image: "/assets/portfolio-2.jpg"
      },
      {
        title: "City T20 Championship",
        category: "Tournaments",
        kpis: [{ label: "Teams", value: "32" }, { label: "Spectators", value: "5,000+" }],
        image: "/assets/portfolio-3.jpg"
      }
    ];
    const created = await Portfolio.insertMany(mockData);
    res.json({ message: "Seeded successfully", data: created });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
