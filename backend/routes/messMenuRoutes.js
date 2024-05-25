const express = require('express');
const router = express.Router();
const messMenuController = require('../controllers/messMenuController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Fetch messMenu route
router.get('/fetch',authMiddleware, messMenuController.fetchMessMenu);

router.get('/fetch1',authMiddleware, messMenuController.chiefFetchMessMenu);

// update messMenu route
router.put('/update',authMiddleware, messMenuController.updateMessMenu);

module.exports = router;
