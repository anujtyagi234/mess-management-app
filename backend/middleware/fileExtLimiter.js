const path = require("path");

const fileExtLimiter = (allowedExtArray) => {
    return (req, res, next) => {
        const files = req.files;

        const fileExtensions = Object.keys(files).map(key =>
            path.extname(files[key].name)
        );

        // Check if all file extensions are allowed
        const allowed = fileExtensions.every(ext => allowedExtArray.includes(ext));

        if (!allowed) {
            const allowedExtensions = allowedExtArray.join(', ');
            const message = `Upload failed. Only ${allowedExtensions} files allowed.`;

            return res.status(422).json({ status: "error", message });
        }

        next();
    };
};

module.exports = fileExtLimiter;