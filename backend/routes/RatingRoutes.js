const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/fetch',authMiddleware, ratingController.getRatings);
router.get('/fetch/user',authMiddleware, ratingController.getUserRatings);
router.post('/submit',authMiddleware, ratingController.submitRating);

module.exports = router;
