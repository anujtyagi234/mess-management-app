const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authMiddleware, authorize } = require("../middleware/authMiddleware");

router.post("/addchiefwarden", authMiddleware, authorize('admin'), adminController.addchiefwarden);

router.post("/addaccountant", authMiddleware, authorize('admin'), adminController.addaccountant);

router.post("/addadmin", authMiddleware, authorize('admin'), adminController.addadmin);

module.exports = router;
