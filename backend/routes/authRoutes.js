const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { getUserDataFromToken } = require('../middleware/fetchuser');

// Signup route  
router.post("/signup", authController.signup);

// Login route
router.post("/login", authController.login);

//fetch user route
router.get('/user', getUserDataFromToken, (req, res) => {
    const userData = req.user;
    res.json(userData);
  });

module.exports = router;
