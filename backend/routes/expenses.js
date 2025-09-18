const express = require("express");
const router = express.Router();
const {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary,
  getTotals,
} = require("../controllers/expensesController");
router.get("/summary/totals", getTotals);
router.get("/summary/categories", getSummary);
router.get("/", getExpenses);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);
module.exports = router;
