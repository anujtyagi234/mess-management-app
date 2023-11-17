// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  // You can do additional processing here, like saving the file path to a database.
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

