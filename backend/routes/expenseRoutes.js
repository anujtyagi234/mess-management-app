const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/expenseController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Route to fetch expenses for authenticated users
router.get("/fetch", authMiddleware, ExpenseController.fetchExpense);

// Route to fetch expenses for chief, based on query parameters
router.get("/fetch1", authMiddleware, ExpenseController.chiefFetchExpense);

// Route to update expenses
router.put("/update", authMiddleware, ExpenseController.updateExpense);

module.exports = router;
