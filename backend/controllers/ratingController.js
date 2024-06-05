const Rating = require('../models/RatingModel');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
exports.getRatings = async (req, res) => {
  const hostel = req.user.hostelname;

  try {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() + 6 - today.getDay()));
    
    const ratings = await Rating.find({
      hostel: hostel,
      date: { $gte: startOfWeek.toISOString().split('T')[0], $lte: endOfWeek.toISOString().split('T')[0] }
    });

    const weekRatings = daysOfWeek.map(day => {
      const rating = ratings.find(r => new Date(r.date).toLocaleDateString('en-US', { weekday: 'long' }) === day);
      return {
        date: day,
        averageRating: rating ? rating.averageRating : 0
      };
    });

    res.json(weekRatings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ratings', error });
  }
};

exports.submitRating = async (req, res) => {
  const { rating } = req.body;
  const hostel = req.user.hostelname;
  const userId = req.user._id;
  const today = new Date();
  const day = today.toISOString().split('T')[0];

  try {
    let existingRating = await Rating.findOne({ hostel, date: day });

    if (existingRating) {
      const userRating = existingRating.userRatings.find(ur => ur.userId.toString() === userId.toString());

      if (userRating) {
        return res.status(400).json({ message: 'You have already rated today' });
      }

      existingRating.userRatings.push({ userId, rating });
      const totalRatings = existingRating.userRatings.reduce((sum, ur) => sum + ur.rating, 0);
      existingRating.averageRating = totalRatings / existingRating.userRatings.length;
      
      await existingRating.save();
      return res.status(200).json({
        averageRating: existingRating.averageRating
      });
    }

    const newRating = new Rating({ hostel, date: day, averageRating: rating, userRatings: [{ userId, rating }] });
    await newRating.save();

    res.status(201).json({
      averageRating: newRating.averageRating
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting rating', error });
  }
};

exports.getUserRatings = async (req, res) => {
  const userId = req.user._id;
  const today = new Date();
  const day = today.toISOString().split('T')[0];
  const hostel = req.user.hostelname;
  
  try {
    const ratings = await Rating.find({ hostel, date: day });
    let userRating = null;

    ratings.forEach(rating => {
      const foundUserRating = rating.userRatings.find(userRating => userRating.userId.toString() === userId.toString());
      if (foundUserRating) {
        userRating = foundUserRating;
      }
    });

    if (!userRating) {
      return res.status(404).json({ message: 'No rating found for this user today' });
    }

    res.json(userRating.rating);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user ratings', error });
  }
};
