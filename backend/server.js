// server.js

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import cors from 'cors'; // Import cors module

import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 9000;

// Middleware to handle CORS
app.use(cors());

// Middleware to handle static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle static files from the 'uploads' directory
app.use('/uploads_Notice', express.static(path.join(__dirname, 'uploads_Notice')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads_Notice/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage: storage });

// Route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.get('/AddNotice', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/upload', upload.array('files'), (req, res) => {
  // Handle file upload
  console.log('Received files:', req.files);

  const uploadDir = path.join(__dirname, 'uploads_Notice');
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

 
});

// app.get('/notices', (req, res) => {
//   // Get the list of notices (you may want to read this from a database)
//   const uploadDir = path.join(__dirname, 'uploads_Notice');
//   console.log('Fetching notice list...');
//   // Replace BASE_URL with the actual base URL of your server
//   const notices = fs.readdirSync(uploadDir).map((file) => ({
//     name: file,
//     url: `http://localhost:9000/uploads_Notice/${file}`, // Use the complete path
//     timestamp: stat.mtime,
//   }));

//   console.log('Notices fetched successfully:', notices);
//   res.json(notices);
// });


app.get('/notices', (req, res) => {
    const uploadDir = path.join(__dirname, 'uploads_Notice');
    console.log('Fetching notice list...');
  
    const notices = fs.readdirSync(uploadDir).map((file) => {
      const filePath = path.join(uploadDir, file);
      const stat = fs.statSync(filePath);
  
      return {
        name: file,
        url: `http://localhost:9000/uploads_Notice/${file}`,
        timestamp: stat.mtime, // Include the timestamp
      };
    });
  
    console.log('Notices fetched successfully:', notices);
    res.json(notices);
  });
  



app.get('/downloads/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads_Notice', req.params.filename);

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
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
