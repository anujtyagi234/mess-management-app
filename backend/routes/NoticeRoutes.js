const express = require('express')
const path = require('path')
const {upload, uploadFiles, getNotices, downloadFile } = require('../controllers/NoticeController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(authMiddleware)

// Route handler for the root path
router.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Route handler for serving the add notice page
router.get('/AddNotice', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route handler for uploading files
router.post('/upload', upload.array('files'), uploadFiles);

// Route handler for fetching notices
router.get('/notices', getNotices);

// Route handler for downloading a specific file
router.get('/downloads/:filename', downloadFile);

module.exports = router;
