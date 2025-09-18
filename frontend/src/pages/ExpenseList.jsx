import { useEffect, useState } from "react";
import API from "../api"; 

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await API.get("/expenses"); 
        setExpenses(res.data);
      } catch (err) {
        console.error(err);
        alert("❌ Failed to fetch expenses");
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="card shadow p-4 mt-4" style={{ backgroundColor: "#f9f9fb" }}>
      <h2 className="mb-3 text-success">📋 All Expenses</h2>
      <table className="table table-hover table-bordered align-middle">
        <thead className="table-primary text-center">
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((exp) => (
              <tr key={exp._id}>
                <td>{exp.title}</td>
                <td className="fw-bold text-danger">₹{exp.amount}</td>
                <td>
                  <span className="badge bg-info text-dark">{exp.category}</span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
