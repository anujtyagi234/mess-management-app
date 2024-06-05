const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
});

const ratingSchema = new mongoose.Schema({
  hostel: { type: String, required: true },
  date: { type: Date, required: true },
  averageRating: { type: Number, required: true, default: 0 },
  userRatings: [userRatingSchema],
}, { timestamps: true });

module.exports = mongoose.model('Rating', ratingSchema);
