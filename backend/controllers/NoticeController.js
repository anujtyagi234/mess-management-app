const path = require('path');
const fs = require('fs');

const filename = __filename;
const __dirname1 = path.dirname(filename);

// Handle file upload and cleanup old files
const uploadFiles = (req, res) => {
  console.log('Received files:', req.files);

  const uploadDir = path.join(__dirname1, '../public/uploads_Notice');
  const notices = fs.readdirSync(uploadDir);

  // Sort files by modification time (newest first)
  const sortedFiles = notices
    .map((file) => ({ name: file, time: fs.statSync(path.join(uploadDir, file)).mtime.getTime() }))
    .sort((a, b) => b.time - a.time)
    .map((file) => file.name);

  // Keep only the newest three files
  const newestFiles = sortedFiles.slice(0, 3);

  // Remove old files from the uploads folder
  notices.forEach((file) => {
    if (!newestFiles.includes(file)) {
      const filePath = path.join(uploadDir, file);
      fs.unlinkSync(filePath); // Delete the old file
    }
  });

  console.log('Files processed successfully');
  res.sendStatus(200);
};

// Fetch list of notices
const getNotices = (req, res) => {
  const uploadDir = path.join(__dirname1, '../public/uploads_Notice');
  console.log('Fetching notice list...');

  const notices = fs.readdirSync(uploadDir).map((file) => {
    const filePath = path.join(uploadDir, file);
    const stat = fs.statSync(filePath);

    return {
      name: file,
      url: `http://localhost:3000/public/uploads_Notice/${file}`,
      timestamp: stat.mtime, // Include the timestamp
    };
  });

  console.log('Notices fetched successfully:', notices);
  res.json(notices);
};

// Download a notice file
const downloadFile = (req, res) => {
  const filePath = path.join(__dirname1, '../public/uploads_Notice', req.params.filename);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', req.params.filename);
    return res.status(404).send('File not found');
  }

  console.log('Downloading file:', req.params.filename);
  // Set Content-Disposition header to prompt download
  res.setHeader('Content-Disposition', `attachment; filename="${req.params.filename}"`);

  // Stream the file to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};

module.exports = {
    uploadFiles,
    getNotices,
    downloadFile
  };
