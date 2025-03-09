const express = require('express')
const path = require('path')
const {uploadFiles, getNotices, downloadFile } = require('../controllers/NoticeController');
const { authMiddleware,authorize } = require('../middleware/authMiddleware');
const createMulterConfig = require('../middleware/multer')

const allowedExtensions = [".pdf"];
const maxFileSize = 10 * 1024 * 1024;

// Create the multer middleware with disk storage
const upload = createMulterConfig(allowedExtensions, maxFileSize,'uploads_Notice');

const router = express.Router();
router.use(authMiddleware)


// Route handler for serving the add notice page
router.get('/AddNotice', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route handler for uploading files
router.post('/upload', authorize('chief warden'),upload.array('files'), uploadFiles);

// Route handler for fetching notices
router.get('/notices', getNotices);

// Route handler for downloading a specific file
router.get('/downloads/:filename', downloadFile);

module.exports = router;
