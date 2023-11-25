const express = require('express');
const router = express.Router();
const updateComplainController = require('../controllers/updateComplainController');

// PUT request to mark a complaint as resolved
router.put('/:complaintId/resolved', updateComplainController.resolveComplaint);


router.put('/:complaintId/liked',updateComplainController.likeComplaint)


router.put('/:complaintId/disliked',updateComplainController.dislikeComplaint)

module.exports = router;
