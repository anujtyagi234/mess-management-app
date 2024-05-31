const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/expenseController");
const { authMiddleware,authorize } = require("../middleware/authMiddleware");

// Route to fetch expenses for authenticated users
router.get("/fetch", authMiddleware,ExpenseController.fetchExpense);

// Route to update expenses
router.put("/update", authMiddleware,authorize('accountant'),ExpenseController.updateExpense);

module.exports = router;
