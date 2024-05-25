const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { authMiddleware } = require('../middleware/authMiddleware');

// Signup route
router.post("/signup", authController.signup);

// Login route
router.post("/login", authController.login);

router.get('/user', authMiddleware, authController.getUser);

module.exports = router;
