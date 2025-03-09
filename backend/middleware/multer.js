const multer = require("multer");
const path = require("path");

const createMulterConfig = (allowedExtArray, maxSizeInBytes,directory) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/${directory}`);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      if(directory==='temp') cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      else if(directory==='uploads_Notice') cb(null, `${file.originalname}`);
    },
  });

  // File filter for validating file type
  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtArray.includes(ext)) {
      // Reject the file with an error message
      return cb(new Error(`Invalid file type. Only ${allowedExtArray.join(", ")} files are allowed.`), false);
    }
    cb(null, true);
  };

  // Return the multer instance
  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: maxSizeInBytes },
  });
};

module.exports = createMulterConfig;
