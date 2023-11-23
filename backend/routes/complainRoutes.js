const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const complainController = require('../controllers/complainController');
const filesPayloadExists = require('../middleware/filesPayloadExists');
const fileExtLimiter = require('../middleware/fileExtLimiter');
const fileSizeLimiter = require('../middleware/fileSizeLimiter');

router.post(
  '/complain',
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter(['.png', '.jpg', '.jpeg']),
  fileSizeLimiter,
  complainController.submitComplaint
);

module.exports = router;
