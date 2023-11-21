const express = require("express");
const router = express.Router();
const path = require("path");

router.post('/upload',
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(['.png', '.jpg', '.jpeg']),
    fileSizeLimiter,
    (req, res) => {
        try {
            const files = req.files;

            Object.keys(files).forEach(key => {
                const filepath = path.join(__dirname, 'files', files[key].name);
                files[key].mv(filepath, (err) => {
                    if (err) {
                        return res.status(500).json({ status: "error", message: err });
                    }
                });
            });

            return res.json({
                status: 'success',
                message: 'Files uploaded successfully',
                uploadedFiles: Object.keys(files)
            });
        } catch (error) {
            console.error('Error processing file upload:', error);
            return res.status(500).json({ status: "error", message: 'Internal Server Error' });
        }
    });

module.exports = router;
