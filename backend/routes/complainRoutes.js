const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const complainController = require('../controllers/complainController');
const { authMiddleware,authorize } = require('../middleware/authMiddleware');
const filesPayloadExists = require('../middleware/filesPayloadExists');
const fileExtLimiter = require('../middleware/fileExtLimiter');
const fileSizeLimiter = require('../middleware/fileSizeLimiter');

// Complaint submission route with file upload middleware and error handling middleware
router.post(
  '/complain',
  authMiddleware,
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter(['.png', '.jpg', '.jpeg']),
  fileSizeLimiter,
  complainController.submitComplaint
);

// Fetch complaints route
router.get('/fetchcomplaints',authMiddleware, complainController.fetchComplaints);

// PUT request to mark a complaint as resolved
router.put('/:complaintId/resolved',authMiddleware,authorize('chief warden'), complainController.resolveComplaint);

// PUT request to like a complaint
router.put('/:complaintId/liked', authMiddleware, complainController.likeComplaint);

// PUT request to dislike a complaint
router.put('/:complaintId/disliked', authMiddleware, complainController.dislikeComplaint);

module.exports = router;
