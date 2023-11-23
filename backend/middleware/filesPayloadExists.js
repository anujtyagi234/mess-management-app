const filesPayloadExists = (req, res, next) => {
    if (!req.files) {
        console.log("Missing files in the request payload")
        return res.status(400).json({
            status: "error",
            message: "Missing files in the request payload",
        });
    }

    next();
};

module.exports = filesPayloadExists;
