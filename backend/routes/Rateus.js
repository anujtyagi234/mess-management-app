const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase } = require('../config/db'); // Update with your actual path

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

const ratingSchema = new mongoose.Schema({
  day: String,
  rating: Number,
});

const Rating = mongoose.model('Rating', ratingSchema);

// Route to get all ratings
app.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ratings' });
  }
});

// Route to add or update a rating
app.post('/ratings', async (req, res) => {
  const { day, rating } = req.body;
  try {
    let existingRating = await Rating.findOne({ day });

    if (existingRating) {
      existingRating.rating = rating;
      await existingRating.save();
    } else {
      const newRating = new Rating({ day, rating });
      await newRating.save();
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save rating' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
