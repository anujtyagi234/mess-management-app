const express = require('express');
const router = express.Router();
const fetchComplaintsController = require('../controllers/fetchComplainController');

// Fetch complaints route
router.get('/fetchcomplaints', fetchComplaintsController.fetchComplaints);

module.exports = router;
