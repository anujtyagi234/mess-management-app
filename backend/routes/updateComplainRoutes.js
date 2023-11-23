const express = require('express');
const router = express.Router();
const updateComplainController = require('../controllers/updateComplainController');

// PUT request to mark a complaint as resolved
router.put('/:complaintId/update', updateComplainController.resolveComplaint);

module.exports = router;
