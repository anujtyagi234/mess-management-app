const Complaint = require('../models/complainModel');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// uuidv4() is called to generate a unique identifier (UUID), and it's then used to create a unique filename for each uploaded file. This ensures that the filenames are unique and unlikely to clash with existing files. The resulting filename is a combination of the generated UUID and the original filename of the uploaded file.


const submitComplaint = async (req, res) => {
  const { user, title, description,hostelName } = req.body;
  const files = req.files;
  const uploadedImages = [];
  
  try {
    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    Object.keys(files).forEach(key => {
      const uniqueFileName = `${uuidv4()}-${files[key].name}`;
      const filepath = path.join(__dirname, '..', 'uploads', uniqueFileName);

      files[key].mv(filepath, (err) => {
        if (err) {
          console.error('Error moving file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      uploadedImages.push(uniqueFileName);
    });

    const complaint = new Complaint({
      user,
      title,
      description,
      hostelName,
      images: uploadedImages,
    });

    await complaint.save();
    return res.json({ message: 'Complaint submitted successfully' });
  } catch (err) {
    console.error('Error submitting complaint:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { submitComplaint };
