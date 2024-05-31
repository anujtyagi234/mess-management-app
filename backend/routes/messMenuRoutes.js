const express = require('express');
const router = express.Router();
const messMenuController = require('../controllers/messMenuController');
const { authMiddleware,authorize } = require('../middleware/authMiddleware');

// Fetch messMenu route
router.get('/fetch',authMiddleware, messMenuController.fetchMessMenu);

router.get('/fetch1',authMiddleware,authorize('chief warden'), messMenuController.chiefFetchMessMenu);

// update messMenu route
router.put('/update',authMiddleware,authorize('chief warden'), messMenuController.updateMessMenu);

module.exports = router;
