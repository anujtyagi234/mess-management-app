const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Add Chief Warden route
router.post("/addchiefwarden", adminController.addchiefwarden);

// Add Accountant route
router.post("/addaccountant", adminController.addaccountant);


module.exports = router;