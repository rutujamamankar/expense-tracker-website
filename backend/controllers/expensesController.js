const Expense = require("../models/Expense");
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getSummary = async (req, res) => {
  try {
    const summary = await Expense.aggregate([
      { $group: { _id: "$type", total: { $sum: "$amount" } } },
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getTotals = async (req, res) => {
  try {
    const expenses = await Expense.find();

    const totalIncome = expenses
      .filter((e) => e.type === "income")
      .reduce((sum, e) => sum + e.amount, 0);

    const totalExpense = expenses
      .filter((e) => e.type === "expense")
      .reduce((sum, e) => sum + e.amount, 0);

    const balance = totalIncome - totalExpense;

    res.json({ totalIncome, totalExpense, balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary,
  getTotals,
};
