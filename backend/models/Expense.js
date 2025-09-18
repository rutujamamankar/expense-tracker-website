const mongoose = require("mongoose");
const ExpenseSchema = new mongoose.Schema({
  type: { type: String, enum: ["income", "expense"], required: true },
  title: { type: String }, // ✅ new
  category: { type: String }, // ✅ new
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Expense", ExpenseSchema);
