import { useState } from "react";
import API from "../api";
export default function AddExpense() {
  const [form, setForm] = useState({
    type: "expense",   
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/expenses", form);
      alert("Entry added successfully!");
      setForm({ type: "expense", amount: "", description: "" });
    } catch (err) {
      alert(err.response?.data?.message || "❌ Failed to add entry");
    }
  };
  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">➕ Add Income / Expense</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="form-control mb-2"
          required
        />
        <input
            type="text"
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="form-control mb-2"
        />
         <input
            type="text"
            name="category"
            value={form.category || ""}
            onChange={handleChange}
            placeholder="Category (Food, Travel, etc.)"
            className="form-control mb-2"
/>
        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>
      </form>
    </div>
  );
}
