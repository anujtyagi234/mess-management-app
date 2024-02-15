const express = require('express');
const router = express.Router();
const messMenuController = require('../controllers/messMenuController');

// Fetch messMenu route
router.get('/fetch', messMenuController.fetchMessMenu);

// update messMenu route
router.put('/update', messMenuController.updateMessMenu);

module.exports = router;
