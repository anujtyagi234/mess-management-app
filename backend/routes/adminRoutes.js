const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/addchiefwarden", authMiddleware, adminController.addchiefwarden);

router.post("/addaccountant", authMiddleware, adminController.addaccountant);

router.post("/addadmin", authMiddleware, adminController.addadmin);

module.exports = router;
